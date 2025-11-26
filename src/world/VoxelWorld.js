import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

export class VoxelWorld {
    constructor(params) {
        this.chunkSize = params.chunkSize || 32;
        this.tileSize = params.tileSize || 1;
        this.chunks = new Map();
        this.mesh = new THREE.Group();
        
        this.noise2D = createNoise2D();
        
        // Material for the voxels
        this.material = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            roughness: 0.8
        });

        this.islandCenters = [
            { x: -150, z: 150, type: 'ice' },
            { x: -150, z: -150, type: 'volcanic' }
        ];

        this.destroyedBlocks = new Set();
        this.placedBlocks = new Map(); // Key: "x,z", Value: Map<y, color>
        this.blockHealth = new Map(); // Key: "x,y,z", Value: health

        // Generate initial area
        this.generateChunk(0, 0);
    }

    getChunkKey(x, z) {
        return `${x},${z}`;
    }

    generateChunk(chunkX, chunkZ, force = false) {
        const key = this.getChunkKey(chunkX, chunkZ);
        if (this.chunks.has(key)) {
            if (force) {
                const oldMesh = this.chunks.get(key);
                this.mesh.remove(oldMesh);
                oldMesh.dispose();
                this.chunks.delete(key);
            } else {
                return;
            }
        }

        const geometry = new THREE.BoxGeometry(this.tileSize, this.tileSize, this.tileSize);
        const instancedMesh = new THREE.InstancedMesh(geometry, this.material, this.chunkSize * this.chunkSize * 60); // Increased buffer
        instancedMesh.castShadow = true;
        instancedMesh.receiveShadow = true;
        
        const dummy = new THREE.Object3D();
        let count = 0;
        const color = new THREE.Color();

        for (let x = 0; x < this.chunkSize; x++) {
            for (let z = 0; z < this.chunkSize; z++) {
                const worldX = chunkX * this.chunkSize + x;
                const worldZ = chunkZ * this.chunkSize + z;
                
                // Find closest island info
                let closestDist = Infinity;
                let closestCenter = null;
                
                for (const c of this.islandCenters) {
                    const dx = worldX - c.x;
                    const dz = worldZ - c.z;
                    const dist = Math.sqrt(dx*dx + dz*dz);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestCenter = c;
                    }
                }

                const maxRadius = 50;
                
                // River & Waterfall Logic
                const rDx = worldX - closestCenter.x;
                const rDz = worldZ - closestCenter.z;
                const isRiver = (rDx < -30 && Math.abs(rDz) < 3);
                const isWaterfall = (isRiver && rDx < -48 && rDx > -55);

                if (closestDist > maxRadius && !isWaterfall) continue;

                // Island Shape: Inverted Pyramid (Stepped)
                const nDist = closestDist / maxRadius; // 0 to 1
                const maxDepth = 55;
                
                // Stepped Pyramid Shape
                // Quantize distance to create steps
                const stepSize = 4;
                const steppedDist = Math.floor(closestDist / stepSize) * stepSize;
                const nStepped = steppedDist / maxRadius;
                
                // Linear slope for pyramid look
                let depth = maxDepth * (1 - nStepped);
                
                // Add some noise to the bottom for "icicle" look
                const bottomNoise = this.noise2D(worldX * 0.1, worldZ * 0.1) * 6;
                depth += bottomNoise;
                
                const groundY = 30;
                let bottomY = Math.floor(groundY - Math.max(2, depth));
                
                if (isWaterfall) {
                    bottomY = -30; // Waterfall drops down further
                }
                
                // Pond Logic
                let isPond = false;
                let pondDepth = 0;
                const pondRadius = 12;
                // Pond offset near waterfall (Left side)
                const pDx = worldX - (closestCenter.x - 30);
                const pDz = worldZ - closestCenter.z;
                const pDist = Math.sqrt(pDx*pDx + pDz*pDz);
                
                if (pDist < pondRadius) {
                    isPond = true;
                    // Parabolic shape
                    const nPond = pDist / pondRadius;
                    pondDepth = Math.floor(4 * (1 - nPond*nPond));
                }

                // Tower Logic (Updated based on reference image)
                let isTower = false;
                let isWall = false;
                let isInterior = false;
                let isDoor = false;
                let isWindow = false;
                let isFloorRim = false;
                let isRoof = false;
                let isHat = false;
                let isHatBand = false;
                
                // Tower is in the center
                const towerX = closestCenter.x;
                const towerZ = closestCenter.z;
                
                const tDx = worldX - towerX;
                const tDz = worldZ - towerZ;
                let tDist = Math.sqrt(tDx*tDx + tDz*tDz);
                
                // Tower Dimensions
                const towerRadius = 4.5;
                const floorHeight = 7;
                const numFloors = 4;
                const towerHeight = floorHeight * numFloors; // 28 blocks
                const roofBaseY = groundY + towerHeight;
                
                // Check if within tower footprint
                if (tDist <= towerRadius + 2) { // +2 for roof overhang
                    isTower = true;
                }

                // Determine render height
                let maxY = groundY;
                if (isTower) {
                    // Base tower height + roof height
                    maxY = roofBaseY + 20; 
                }

                // Tree Logic
                let hasTree = false;
                let treeHeight = this.getTreeHeight(worldX, worldZ);
                if (treeHeight > 0) {
                    hasTree = true;
                }

                // Biome Colors
                const biome = closestCenter.type;
                let grassColor = 0x5C9E46;
                let dirtColor = 0x6B4E38;
                let stoneColor = 0x5A5A5A;
                let wallColor1 = 0x333333; // Dark Stone
                let wallColor2 = 0x444444;
                let roofColor1 = 0x4B0082; // Purple
                let roofColor2 = 0x3A006E;
                let woodColor = 0x5C4033;
                let leafColor = 0x228B22;
                let windowColor = 0xFFFF00; // Glowing Yellow
                let rimColor = 0x5C4033; // Dark Wood/Stone for rims
                let hatBandColor = 0xFFA500; // Orange
                let waterColor = 0x4444ff;
                let foamColor = 0x8888ff;

                if (biome === 'ice') {
                    grassColor = 0xFFFFFF; // Snow
                    dirtColor = 0xDDEEFF; // Frozen Dirt
                    stoneColor = 0x888888; // Grey Stone
                    wallColor1 = 0x556677; // Blue-Grey Stone
                    wallColor2 = 0x445566;
                    roofColor1 = 0x222255; // Dark Blue Hat
                    roofColor2 = 0x111144;
                    woodColor = 0x443322; // Dark Wood
                    leafColor = 0x225544; // Dark Teal
                    windowColor = 0xAAFFFF; // Cyan Glow
                    rimColor = 0x667788; // Lighter Rim
                    hatBandColor = 0xFFFFFF; // White Band
                    waterColor = 0xCCFFFF; // Frozen Water (Ice)
                    foamColor = 0xFFFFFF;
                } else if (biome === 'arcane') {
                    grassColor = 0x4B0082; // Indigo
                    dirtColor = 0x2E2B5F; // Dark Purple
                    stoneColor = 0x483D8B; // Mystic Blue
                    wallColor1 = 0x220044; // Dark Purple Stone
                    wallColor2 = 0x330055;
                    roofColor1 = 0xFFD700; // Gold
                    roofColor2 = 0xDAA520; // Goldenrod
                    woodColor = 0xC0C0C0; // Silver
                    leafColor = 0xFF00FF; // Magenta
                    windowColor = 0x00FFFF; // Cyan Glow
                    rimColor = 0x4B0082;
                    hatBandColor = 0x9932CC; // Dark Orchid
                } else if (biome === 'volcanic') {
                    grassColor = 0x2a0a0a; // Dark Reddish Black Ground
                    dirtColor = 0x1a0505; 
                    stoneColor = 0x1a1a1a; 
                    wallColor1 = 0x5a2a2a; // Dark Red Brick
                    wallColor2 = 0x4a1a1a; // Darker Red Brick
                    roofColor1 = 0xcc2200; // Red Hat
                    roofColor2 = 0xaa1100; // Darker Red Hat
                    woodColor = 0x331100; 
                    leafColor = 0xFF4500; 
                    windowColor = 0xFFaa00; // Yellow/Orange Glow
                    rimColor = 0x884444; // Reddish Grey
                    hatBandColor = 0xFFA500; // Orange Band
                    waterColor = 0xFF4500; 
                    foamColor = 0xFFFF00; 
                }

                for (let y = bottomY; y <= maxY + 8; y++) {
                    // Check if destroyed
                    if (this.destroyedBlocks.has(`${worldX},${y},${worldZ}`)) continue;

                    let visible = false;
                    let blockColor = grassColor;

                    // 1. Base Island
                    if (y <= groundY) {
                        visible = true;
                        if (isInterior) blockColor = (y === groundY) ? stoneColor : 0xffffff; 
                        else if (isWall && isDoor && y === groundY) blockColor = stoneColor;
                        else if (isPond) {
                            const bedY = groundY - pondDepth;
                            if (y > bedY) {
                                // Water
                                blockColor = waterColor; 
                            } else {
                                // Ground below pond
                                blockColor = dirtColor;
                            }
                        }
                        else if (isRiver) {
                            const riverDepth = 2;
                            const bedY = groundY - riverDepth;
                            
                            if (isWaterfall) {
                                // Falling water
                                blockColor = waterColor;
                                if (Math.random() > 0.8) blockColor = foamColor; // Foam
                            } else if (y > bedY) {
                                // River water
                                blockColor = waterColor;
                            } else {
                                // River bed
                                blockColor = dirtColor;
                            }
                        }
                        else {
                             const depthFromSurface = groundY - y;
                             if (depthFromSurface === 0) {
                                blockColor = grassColor; 

                                // Floor under tower
                                if (tDist <= towerRadius - 1.5) {
                                    blockColor = roofColor1;
                                }

                                // Ice Path (From door to edge)
                                if (biome === 'ice') {
                                    // Door is at -Z, so path goes -Z
                                    if (Math.abs(tDx) < 2.5 && tDz < -4 && tDz > -48) {
                                        blockColor = 0x88CCFF; // Ice Path
                                    }
                                }

                                // Molten Path (From door to edge)
                                if (biome === 'volcanic') {
                                    // Door is at +Z, so path goes +Z
                                    if (Math.abs(tDx) < 2.5 && tDz > 4 && tDz < 48) {
                                        blockColor = 0x220000; // Dark Obsidian
                                        // Cracks
                                        if (Math.random() > 0.8) blockColor = 0x550000; // Magma Rock
                                        if (Math.random() > 0.95) blockColor = 0xFF4500; // Lava Crack
                                    }
                                }
                             }
                             else if (depthFromSurface < 4) blockColor = dirtColor; 
                             else blockColor = stoneColor;
                        }
                    }
                    
                    // 2. Tower Structure (Castle Style)
                    if (isTower && y > groundY) {
                        const localY = y - groundY;
                        
                        if (biome === 'ice' || biome === 'volcanic') {
                            // --- WITCH TOWER (Witch Hat) ---
                            const wallHeight = 28;
                            const roofStart = wallHeight;
                            
                            // A. Walls
                            if (localY < roofStart) {
                                // Main Cylinder
                                if (tDist <= towerRadius) {
                                    if (tDist > towerRadius - 1.5) {
                                        visible = true;
                                        blockColor = (Math.random() > 0.5) ? wallColor1 : wallColor2;
                                        
                                        // Windows
                                        if (localY > 5 && (localY % 7 === 3 || localY % 7 === 4)) {
                                            // Cardinal directions
                                            if ((Math.abs(tDx) < 1 || Math.abs(tDz) < 1) && tDist > towerRadius - 1) {
                                                blockColor = 0x111122; // Dark Window
                                            }
                                        }
                                        
                                        const doorDir = (biome === 'ice') ? -1 : 1;

                                        // Door
                                        if (localY < 5 && (tDz * doorDir) > 0 && Math.abs(tDx) < 1.5) {
                                            if (localY < 4) visible = false; // Open
                                            else blockColor = woodColor; // Wood Arch
                                        }
                                        
                                        // Lanterns (next to door)
                                        if (localY === 3 && (tDz * doorDir) > 0 && Math.abs(tDx) > 2 && Math.abs(tDx) < 3) {
                                            visible = true;
                                            blockColor = windowColor; // Lantern
                                        }
                                    }
                                }
                                
                                // Battlements / Rim (Overhang)
                                if (localY === roofStart - 1 || localY === roofStart - 2) {
                                    if (tDist <= towerRadius + 1 && tDist > towerRadius - 1.5) {
                                        visible = true;
                                        blockColor = rimColor; // Lighter Rim
                                    }
                                }
                            }
                            // B. Roof (Witch Hat)
                            else {
                                const roofY = localY - roofStart;
                                
                                // Brim (Wide flat disk)
                                if (roofY === 0) {
                                    if (tDist <= towerRadius + 2.5) {
                                        visible = true;
                                        blockColor = roofColor1; // Hat Color
                                    }
                                }
                                // Hat Cone
                                else {
                                    // Bent Tip Logic
                                    // Shift center based on height
                                    const bendFactor = roofY * 0.1;
                                    const offsetX = Math.sin(roofY * 0.15) * bendFactor;
                                    
                                    const hatDx = tDx - offsetX;
                                    const hatDz = tDz;
                                    const hatDist = Math.sqrt(hatDx*hatDx + hatDz*hatDz);
                                    
                                    const hatHeight = 25;
                                    const hatRadius = Math.max(0, (towerRadius) * (1 - roofY / hatHeight));
                                    
                                    if (hatDist <= hatRadius) {
                                        visible = true;
                                        blockColor = roofColor1; // Hat Color
                                        
                                        // Band
                                        if (roofY >= 1 && roofY <= 3) {
                                            blockColor = hatBandColor; // Band Color
                                            // Buckle
                                            if (roofY >= 1.5 && roofY <= 2.5 && hatDz > hatRadius - 1) {
                                                blockColor = 0xFFD700; // Gold
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            // Walls & Battlements
                            if (localY <= towerHeight + 2) {
                                // Check for floor rims (every 7 blocks)
                                const isRim = (localY % floorHeight === 0) && localY < towerHeight;
                                
                                // Battlements (Top of tower)
                                const isBattlementBase = (localY === towerHeight);
                                const isBattlementTop = (localY === towerHeight + 1);
                                
                                let currentRadius = towerRadius;
                                if (isRim) currentRadius = towerRadius + 0.5;
                                if (isBattlementBase) currentRadius = towerRadius + 1.5; // Overhang
                                if (isBattlementTop) currentRadius = towerRadius + 1.5;

                                if (tDist <= currentRadius) {
                                    if (tDist > currentRadius - 1.5) {
                                        // Wall Logic
                                        visible = true;
                                        blockColor = isRim ? rimColor : (Math.random() > 0.5 ? wallColor1 : wallColor2);
                                        
                                        if (isBattlementBase) blockColor = rimColor;
                                        
                                        // Crenellations (Gaps in battlements)
                                        if (isBattlementTop) {
                                            // Calculate angle for gaps
                                            const angle = Math.atan2(tDz, tDx);
                                            const degrees = angle * (180 / Math.PI);
                                            // 8 gaps (every 45 degrees)
                                            if (Math.abs(degrees % 45) < 15) {
                                                visible = false; // Gap
                                            } else {
                                                blockColor = rimColor;
                                            }
                                        }

                                        // Door (Ground Floor only)
                                        if (localY < 5 && tDz > 0 && Math.abs(tDx) < 1.5 && !isBattlementBase && !isBattlementTop) {
                                            blockColor = woodColor; // Door
                                            if (localY > 3) visible = true; // Arch
                                            else visible = false; // Open door
                                        }
                                        
                                        // Windows (Floors 2, 3, 4)
                                        if (!isRim && localY > 7 && localY < towerHeight) {
                                            // Check cardinal directions for windows
                                            const isWindowSide = (Math.abs(tDx) < 1 || Math.abs(tDz) < 1);
                                            const windowY = localY % floorHeight;
                                            if (isWindowSide && windowY >= 2 && windowY <= 4) {
                                                blockColor = windowColor;
                                            }
                                        }
                                    }
                                }
                            }
                            // Roof (Cone)
                            else {
                                const roofY = localY - (towerHeight + 2);
                                const roofHeight = 12;
                                const maxRoofRadius = towerRadius + 0.5;
                                const roofRadius = maxRoofRadius * (1 - roofY / roofHeight);
                                
                                if (tDist <= Math.max(0, roofRadius)) {
                                    visible = true;
                                    blockColor = (roofY % 2 === 0) ? roofColor1 : roofColor2;
                                }
                                
                                // Spire (Single block at top)
                                if (roofY > roofHeight && roofY <= roofHeight + 2) {
                                    if (tDist < 0.8) {
                                        visible = true;
                                        blockColor = roofColor1;
                                    }
                                }
                            }
                        }
                    }

                    // 4. Vegetation (Trees & Mushrooms)
                    if (y > groundY) {
                        const veg = this.getVegetationBlock(worldX, y, worldZ, groundY, woodColor, leafColor);
                        if (veg.exists) {
                            visible = true;
                            blockColor = veg.color;
                        }
                    }
                    
                    if (!visible) continue;

                    dummy.position.set(
                        worldX * this.tileSize,
                        y * this.tileSize,
                        worldZ * this.tileSize
                    );
                    dummy.updateMatrix();
                    instancedMesh.setMatrixAt(count, dummy.matrix);

                    color.setHex(blockColor);
                    
                    // Deterministic random for color variation
                    // const r1 = this.hash(worldX, y + worldZ * 57);
                    // const r2 = this.hash(worldX * 13, y * 7 + worldZ);
                    // const r3 = this.hash(worldX + y * 3, worldZ * 11);

                    // color.offsetHSL(
                    //     (r1 - 0.5) * 0.05,
                    //     (r2 - 0.5) * 0.05,
                    //     (r3 - 0.5) * 0.05
                    // );

                    // Apply Damage Darkening
                    const blockKey = `${worldX},${y},${worldZ}`;
                    if (this.blockHealth.has(blockKey)) {
                        const health = this.blockHealth.get(blockKey);
                        const maxHealth = 3;
                        const brightness = 0.3 + (0.7 * (health / maxHealth)); // Min 0.3 brightness
                        color.multiplyScalar(brightness);
                    }

                    instancedMesh.setColorAt(count, color);

                    count++;
                }

                // 5. Placed Blocks
                const colKey = `${worldX},${worldZ}`;
                if (this.placedBlocks.has(colKey)) {
                    const column = this.placedBlocks.get(colKey);
                    for (const [y, colorVal] of column) {
                         if (this.destroyedBlocks.has(`${worldX},${y},${worldZ}`)) continue;
                         
                         dummy.position.set(
                            worldX * this.tileSize,
                            y * this.tileSize,
                            worldZ * this.tileSize
                         );
                         dummy.updateMatrix();
                         instancedMesh.setMatrixAt(count, dummy.matrix);
                         
                         color.setHex(colorVal);

                         // Apply Damage Darkening
                         const blockKey = `${worldX},${y},${worldZ}`;
                         if (this.blockHealth.has(blockKey)) {
                             const health = this.blockHealth.get(blockKey);
                             const maxHealth = 3;
                             const brightness = 0.3 + (0.7 * (health / maxHealth));
                             color.multiplyScalar(brightness);
                         }

                         instancedMesh.setColorAt(count, color);
                         count++;
                    }
                }
            }
        }
        
        instancedMesh.count = count;
        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
        
        this.chunks.set(key, instancedMesh);
        this.mesh.add(instancedMesh);
    }

    update(playerPosition) {
        const chunkX = Math.floor(playerPosition.x / this.chunkSize);
        const chunkZ = Math.floor(playerPosition.z / this.chunkSize);

        // Increase draw distance to see other islands if they are close enough, 
        // or just to ensure the current large island is fully rendered.
        const drawDistance = 4;

        for (let x = -drawDistance; x <= drawDistance; x++) {
            for (let z = -drawDistance; z <= drawDistance; z++) {
                // Only generate if not already generated
                const key = this.getChunkKey(chunkX + x, chunkZ + z);
                if (!this.chunks.has(key)) {
                    this.generateChunk(chunkX + x, chunkZ + z);
                }
            }
        }
    }
    
    // Helper to get height at a position (for physics/collision)
    getHeight(x, z, checkY = 30) {
        const islandInfo = this.getIslandData(x, z);
        if (!islandInfo.isIsland) return -Infinity;

        // Check for Trees
        // We check the integer grid position for a tree
        const treeH = this.getTreeHeight(x, z);
        if (treeH > 0) {
            // Tree trunk is at groundY (30) up to 30 + treeH
            // Leaves are wider? For now let's just collide with the trunk/center column
            // If we are "inside" the tree column
            return 30 + treeH;
        }

        // Check for tower
        for (const c of this.islandCenters) {
            // Check for Pond
            const pDx = x - (c.x - 30);
            const pDz = z - c.z;
            const pDist = Math.sqrt(pDx*pDx + pDz*pDz);
            const pondRadius = 12;
            
            if (pDist < pondRadius) {
                // We are in the pond
                // Return the bed height so player falls in
                // Or return 30 if we want them to walk on water?
               
                const nPond = pDist / pondRadius;
                const pondDepth = Math.floor(4 * (1 - nPond*nPond));
                return 30 - pondDepth;
            }

            // Tower Center
            const towerX = c.x;
            const towerZ = c.z;

            const dx = x - towerX;
            const dz = z - towerZ;
            let dist = Math.sqrt(dx*dx + dz*dz);
            
            // Calculate Roof Height
            // Matches generateChunk logic: roof starts at 58, slope is 0.5 radius per 1 height
            // y <= 71 - 2 * dist
            const roofHeight = Math.floor(71 - 2 * dist);
            
            // Wall Logic
            if (dist <= 5) {
                if (dist > 3.5) {
                    // Wall
                    // Check for door
                    if (dz > 0 && Math.abs(dx) < 1.8) { 
                        return 30; // Doorway is ground level
                    }
                    // Wall height is 58 (30 + 28)
                    // But roof might be higher or lower depending on distance
                    return Math.max(58, roofHeight); 
                } else {
                    // Interior
                    // If we are flying high, we might hit the roof from inside?
                    // For now, just return floor height for physics, 
                    // but for raycasting (getBlock) we might miss the roof if we are inside.
                    // However, getBlock uses (x,y,z) so it checks if y <= h.
                    // If h is 30, then y=60 (roof) returns false.
                    // This means we can't destroy the roof from inside if we use this logic!
                    
                    // But wait, getBlock is: return iy <= h;
                    // This assumes a solid column from 0 to h.
                    // The tower is HOLLOW.
                    // getBlock returning true for interior air is wrong if we want to fly inside.
                    // But getBlock returning false for roof is wrong if we want to shoot it.
                    
                    // The current getBlock implementation assumes heightmap terrain (solid from bottom up).
                    // It does NOT support hollow structures like the tower interior + roof.
                    // To support destroying the roof, we need getBlock to handle 3D structures, not just 2.5D heightmap.
                    
                    // Since we can't easily rewrite the whole engine to be fully voxel-based (storing all blocks),
                    // we rely on procedural generation.
                    // We need a isBlock(x,y,z) function that duplicates the generateChunk logic.
                    
                    // Let's switch getBlock to use a more accurate isBlock check instead of getHeight.
                    return 30;
                }
            }
            
            // Roof overhang outside walls
            if (dist <= 6.5 && roofHeight > 30) {
                 // Only return roof height if it's actually a roof block
                 // But again, heightmap limitation.
                 // If we return roofHeight, the space under the overhang becomes solid.
                 // This prevents walking under the roof overhang.
                 
                 // For now, let's just fix the wall height issue which is the main blocker for destroying the tower.
                 // The roof is less critical to destroy than the walls to get in.
                 return roofHeight;
            }
        }

        return 30;
    }

    findSpawnPoint() {
        // Spawn on the first island (inside the tower)
        // Tower is at 150, 150
        return new THREE.Vector3(150, 32, 150);
    }

    getIslandData(x, z) {
        const maxRadius = 55;

        for (const c of this.islandCenters) {
            const dx = x - c.x;
            const dz = z - c.z;
            const dist = Math.sqrt(dx*dx + dz*dz);
            
            if (dist < maxRadius) {
                return { isIsland: true, center: c, dist: dist };
            }
        }
        
        return { isIsland: false };
    }

    getTreeHeight(x, z) {
        const ix = Math.floor(x);
        const iz = Math.floor(z);

        const islandData = this.getIslandData(ix, iz);
        if (!islandData.isIsland) return 0;

        const c = islandData.center;
        const closestDist = islandData.dist;

        // Tower
        const towerX = c.x;
        const towerZ = c.z;
        const tDx = ix - towerX;
        const tDz = iz - towerZ;
        let tDist = Math.sqrt(tDx*tDx + tDz*tDz);
        const isTower = tDist <= 7;

        // Pond
        const pDx = ix - (c.x - 30);
        const pDz = iz - c.z;
        const pDist = Math.sqrt(pDx*pDx + pDz*pDz);
        const isPond = pDist < 12;

        // River
        const rDx = ix - c.x;
        const rDz = iz - c.z;
        const isRiver = (rDx < -30 && Math.abs(rDz) < 3);

        if (!isTower && !isPond && !isRiver && closestDist > 10 && tDist > 8) {
            // Ice Biome: New Grid System
            if (c.type === 'ice') {
                const GRID = 12;
                const gx = Math.floor(ix / GRID);
                const gz = Math.floor(iz / GRID);
                
                // Jitter (Must match getIceTreeBlock)
                const h1 = this.hash(gx, gz);
                const h2 = this.hash(gx + 99, gz + 88);
                const offsetX = Math.floor((h1 - 0.5) * 4); 
                const offsetZ = Math.floor((h2 - 0.5) * 4);

                const cx = gx * GRID + 6 + offsetX;
                const cz = gz * GRID + 6 + offsetZ;
                
                // Only return height if we are exactly at the trunk
                if (ix === cx && iz === cz) {
                    const treeHash = this.hash(gx * 2, gz * 2);
                    if (treeHash >= 0.4) {
                        // Check distance from tower again for the grid center
                        const ctDx = cx - c.x;
                        const ctDz = cz - c.z;
                        const distFromCenter = Math.sqrt(ctDx*ctDx + ctDz*ctDz);

                        // --- EXCLUSION ZONES (Must match getIceTreeBlock) ---
                        // 1. Clear Tower Area
                        if (distFromCenter < 15) return 0;
                        
                        // 2. Clear Edge
                        if (distFromCenter > 42) return 0;

                        // 3. Clear Ice Path
                        if (Math.abs(ctDx) < 6 && ctDz < -2 && ctDz > -50) return 0;

                        // 4. Check Pond
                        const pDx = cx - (c.x - 30);
                        const pDz = cz - c.z;
                        if (Math.sqrt(pDx*pDx + pDz*pDz) < 15) return 0;

                        // 5. Check River
                        const rDx = cx - c.x;
                        const rDz = cz - c.z;
                        if (rDx < -25 && Math.abs(rDz) < 6) return 0;
                        // ----------------------------------------------------

                        return 10 + Math.floor(treeHash * 5); // Height
                    }
                }
                return 0;
            }

            // Volcanic Biome: New Grid System
            if (c.type === 'volcanic') {
                const GRID = 14;
                const gx = Math.floor(ix / GRID);
                const gz = Math.floor(iz / GRID);
                
                // Jitter (Must match getFireTreeBlock)
                const h1 = this.hash(gx, gz);
                const h2 = this.hash(gx + 123, gz + 456);
                const offsetX = Math.floor((h1 - 0.5) * 6); 
                const offsetZ = Math.floor((h2 - 0.5) * 6);

                const cx = gx * GRID + 7 + offsetX;
                const cz = gz * GRID + 7 + offsetZ;
                
                if (ix === cx && iz === cz) {
                    const treeHash = this.hash(gx * 3, gz * 3);
                    if (treeHash >= 0.5) {
                        const ctDx = cx - c.x;
                        const ctDz = cz - c.z;
                        const distFromCenter = Math.sqrt(ctDx*ctDx + ctDz*ctDz);

                        // --- EXCLUSION ZONES (Must match getFireTreeBlock) ---
                        // 1. Clear Tower Area
                        if (distFromCenter < 15) return 0;

                        // 2. Clear Edge
                        if (distFromCenter > 42) return 0;

                        // 3. Molten Path (Door at +Z)
                        if (Math.abs(ctDx) < 6 && ctDz > 2 && ctDz < 50) return 0;

                        // 4. Check Pond
                        const pDx = cx - (c.x - 30);
                        const pDz = cz - c.z;
                        if (Math.sqrt(pDx*pDx + pDz*pDz) < 15) return 0;

                        // 5. Check River
                        const rDx = cx - c.x;
                        const rDz = cz - c.z;
                        if (rDx < -25 && Math.abs(rDz) < 6) return 0;
                        // ----------------------------------------------------

                        return 12 + Math.floor(treeHash * 4);
                    }
                }
                return 0;
            }

            // Other Biomes: Old System
            const treeNoise = this.noise2D(ix * 0.3, iz * 0.3);
            if (treeNoise > 0.6 && (ix % 3 === 0) && (iz % 3 === 0)) {
                // Deterministic height using pseudo-random based on position
                const randomVal = Math.abs(Math.sin(ix * 12.9898 + iz * 78.233));
                return 4 + Math.floor(randomVal * 3);
            }
        }
        return 0;
    }

    getBlock(x, y, z) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const iz = Math.floor(z);
        const key = `${ix},${iy},${iz}`;

        if (this.destroyedBlocks.has(key)) return false;

        const colKey = `${ix},${iz}`;
        if (this.placedBlocks.has(colKey)) {
            const column = this.placedBlocks.get(colKey);
            if (column.has(iy)) return true;
        }

        // Procedural Logic (Duplicated from generateChunk for accuracy)
        const islandData = this.getIslandData(ix, iz);
        if (!islandData.isIsland) return false;

        const c = islandData.center;
        const groundY = 30;

        // 1. Base Island
        if (iy <= groundY) {
            // Check for Pond/River holes if needed, but for now assume solid base
            // Actually, let's check pond to be accurate
            const pDx = ix - (c.x - 30);
            const pDz = iz - c.z;
            const pDist = Math.sqrt(pDx*pDx + pDz*pDz);
            if (pDist < 12) {
                const nPond = pDist / 12;
                const pondDepth = Math.floor(4 * (1 - nPond*nPond));
                const bedY = groundY - pondDepth;
                return iy <= bedY; 
            }

            // Check Waterfall (No collision)
            const rDx = ix - c.x;
            const rDz = iz - c.z;
            const isRiver = (rDx < -30 && Math.abs(rDz) < 3);
            const isWaterfall = (isRiver && rDx < -48 && rDx > -55);
            if (isWaterfall) return false;

            return true;
        }

        // 2. Tower
        const towerX = c.x;
        const towerZ = c.z;
        const tDx = ix - towerX;
        const tDz = iz - towerZ;
        let tDist = Math.sqrt(tDx*tDx + tDz*tDz);

        const towerRadius = 4.5;
        const floorHeight = 7;
        const numFloors = 4;
        const towerHeight = floorHeight * numFloors; // 28
        const roofBaseY = groundY + towerHeight; // 58

        if (iy > groundY) {
            // Walls
            if (iy <= roofBaseY) {
                const localY = iy - groundY;
                // Check if within wall ring
                // Outer radius: 4.5 (or 5 for rims)
                // Inner radius: 3.0
                const isRim = (localY % floorHeight === 0) || (localY % floorHeight === floorHeight - 1);
                const currentRadius = isRim ? towerRadius + 0.5 : towerRadius;
                
                if (tDist <= currentRadius && tDist > currentRadius - 1.5) {
                    // Door Check
                    // Determine door direction based on biome
                    const doorDir = (c.type === 'ice') ? -1 : 1;
                    
                    // Door is on Z axis. 
                    // If doorDir is 1, door is at +Z (tDz > 0).
                    // If doorDir is -1, door is at -Z (tDz < 0).
                    if (localY < 5 && (tDz * doorDir) > 0 && Math.abs(tDx) < 1.5) {
                        if (localY > 3) return true; // Arch
                        return false; // Open door
                    }
                    return true; // Wall block
                }
            }
            // Roof
            else {
                const roofY = iy - roofBaseY;
                const roofRadius = towerRadius + 2 - (roofY * 0.5);
                if (tDist <= roofRadius && roofRadius >= 0) {
                    return true;
                }
            }
        }

        // 3. Trees
        const treeH = this.getTreeHeight(ix, iz);
        if (treeH > 0) {
            if (iy <= 30 + treeH) return true;
        }

        return false;
    }

    raycast(origin, direction, maxDistance) {
        const start = origin.clone();
        
        let t = 0;
        let x = Math.floor(start.x);
        let y = Math.floor(start.y);
        let z = Math.floor(start.z);

        const stepX = Math.sign(direction.x);
        const stepY = Math.sign(direction.y);
        const stepZ = Math.sign(direction.z);

        const tDeltaX = stepX !== 0 ? Math.abs(1 / direction.x) : Infinity;
        const tDeltaY = stepY !== 0 ? Math.abs(1 / direction.y) : Infinity;
        const tDeltaZ = stepZ !== 0 ? Math.abs(1 / direction.z) : Infinity;

        const distX = stepX > 0 ? (x + 1 - start.x) : (start.x - x);
        const distY = stepY > 0 ? (y + 1 - start.y) : (start.y - y);
        const distZ = stepZ > 0 ? (z + 1 - start.z) : (start.z - z);

        let tMaxX = stepX !== 0 ? distX * tDeltaX : Infinity;
        let tMaxY = stepY !== 0 ? distY * tDeltaY : Infinity;
        let tMaxZ = stepZ !== 0 ? distZ * tDeltaZ : Infinity;

        let normal = new THREE.Vector3();

        while (t < maxDistance) {
            if (this.getBlock(x, y, z)) {
                return {
                    point: new THREE.Vector3(start.x + direction.x * t, start.y + direction.y * t, start.z + direction.z * t),
                    normal: normal,
                    block: { x, y, z }
                };
            }

            if (tMaxX < tMaxY) {
                if (tMaxX < tMaxZ) {
                    x += stepX;
                    t = tMaxX;
                    tMaxX += tDeltaX;
                    normal.set(-stepX, 0, 0);
                } else {
                    z += stepZ;
                    t = tMaxZ;
                    tMaxZ += tDeltaZ;
                    normal.set(0, 0, -stepZ);
                }
            } else {
                if (tMaxY < tMaxZ) {
                    y += stepY;
                    t = tMaxY;
                    tMaxY += tDeltaY;
                    normal.set(0, -stepY, 0);
                } else {
                    z += stepZ;
                    t = tMaxZ;
                    tMaxZ += tDeltaZ;
                    normal.set(0, 0, -stepZ);
                }
            }
        }
        return null;
    }

    addBlock(x, y, z, color) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const iz = Math.floor(z);
        
        const colKey = `${ix},${iz}`;
        if (!this.placedBlocks.has(colKey)) {
            this.placedBlocks.set(colKey, new Map());
        }
        
        const column = this.placedBlocks.get(colKey);
        column.set(iy, color);
        
        // Regenerate chunk
        const chunkX = Math.floor(ix / this.chunkSize);
        const chunkZ = Math.floor(iz / this.chunkSize);
        this.generateChunk(chunkX, chunkZ, true);
    }

    damageBlock(x, y, z, damage = 1) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const iz = Math.floor(z);
        const key = `${ix},${iy},${iz}`;

        // Land Protection: Cannot damage natural blocks at or below ground level (30)
        if (iy <= 30) return false;

        // Check if already destroyed
        if (this.destroyedBlocks.has(key)) return false;

        // Get current health
        let health = 3; // Default max health
        if (this.blockHealth.has(key)) {
            health = this.blockHealth.get(key);
        }

        health -= damage;

        if (health <= 0) {
            // Destroy
            this.removeBlock(x, y, z);
            this.blockHealth.delete(key);
            return true; // Destroyed
        } else {
            // Update health and visual
            this.blockHealth.set(key, health);
            
            // Regenerate chunk to update color
            const chunkX = Math.floor(ix / this.chunkSize);
            const chunkZ = Math.floor(iz / this.chunkSize);
            this.generateChunk(chunkX, chunkZ, true);
            return false; // Not destroyed
        }
    }

    removeBlock(x, y, z) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const iz = Math.floor(z);
        const key = `${ix},${iy},${iz}`;
        
        // Check if it's a placed block
        const colKey = `${ix},${iz}`;
        if (this.placedBlocks.has(colKey)) {
            const column = this.placedBlocks.get(colKey);
            if (column.has(iy)) {
                column.delete(iy);
                if (column.size === 0) {
                    this.placedBlocks.delete(colKey);
                }
                
                // Regenerate chunk
                const chunkX = Math.floor(ix / this.chunkSize);
                const chunkZ = Math.floor(iz / this.chunkSize);
                this.generateChunk(chunkX, chunkZ, true);
                return;
            }
        }

        // Land Protection: Cannot destroy natural blocks at or below ground level (30)
        if (iy <= 30) return;

        if (this.destroyedBlocks.has(key)) return; // Already destroyed
        
        this.destroyedBlocks.add(key);
        
        // Regenerate chunk
        const chunkX = Math.floor(ix / this.chunkSize);
        const chunkZ = Math.floor(iz / this.chunkSize);
        this.generateChunk(chunkX, chunkZ, true); // Force update
    }

    getMapColor(x, z) {
        const islandData = this.getIslandData(x, z);
        if (!islandData.isIsland) return '#000044'; // Deep Water

        const c = islandData.center;
        
        // Tower
        const towerX = c.x;
        const towerZ = c.z;
        const tDx = x - towerX;
        const tDz = z - towerZ;
        
        let isTower = (tDx*tDx + tDz*tDz <= 49);
        
        if (isTower) return '#555555'; // Tower Gray

        // Pond
        const pDx = x - (c.x - 30);
        const pDz = z - c.z;
        if (pDx*pDx + pDz*pDz < 144) return '#4444FF'; // Pond Blue

        // River
        const rDx = x - c.x;
        const rDz = z - c.z;
        const isRiver = (rDx < -30 && Math.abs(rDz) < 3);
        if (isRiver) return '#4444FF';

        // Biome
        if (c.type === 'ice') return '#FFFFFF';
        if (c.type === 'arcane') return '#4B0082';
        if (c.type === 'volcanic') return '#222222';
        
        return '#5C9E46'; // Forest Green
    }

    // Helper for pseudo-random numbers based on coordinates
    hash(x, z) {
        let h = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453123;
        return h - Math.floor(h);
    }

    getVegetationBlock(x, y, z, groundY, woodColor, leafColor) {
        // Determine biome for this location to know which tree type to render
        const islandData = this.getIslandData(x, z);
        if (!islandData.isIsland) return { exists: false };
        const biome = islandData.center.type;

        if (biome === 'ice') {
            return this.getIceTreeBlock(x, y, z, groundY);
        } else if (biome === 'volcanic') {
            return this.getFireTreeBlock(x, y, z, groundY);
        }

        // 1. Legacy Trees (1x1 Columns) for other biomes
        const treeH = this.getTreeHeight(x, z);
        if (treeH > 0) {
            const localY = y - groundY;
            if (localY > 0) {
                if (localY <= treeH) return { exists: true, color: woodColor }; // Wood
                if (localY <= treeH + 2) return { exists: true, color: leafColor }; // Leaves
            }
        }

        // 2. Small Mushrooms - Removed
        return { exists: false };
    }

    getTreeInGrid(gx, gz) {
        const GRID = 14; // Spacing
        
        // Random Position (Jitter)
        // Ensure tree stays within grid cell to avoid cut-offs at boundaries
        // Grid 14 -> Center 7. Radius ~3. Safe margin ~4.
        const h1 = this.hash(gx, gz);
        const h2 = this.hash(gx + 123, gz + 456);
        
        // Jitter range: -3 to +3
        const offsetX = Math.floor((h1 - 0.5) * 6); 
        const offsetZ = Math.floor((h2 - 0.5) * 6);

        const cx = gx * GRID + 7 + offsetX;
        const cz = gz * GRID + 7 + offsetZ;
        
        // Check existence
        const treeHash = this.hash(gx * 3, gz * 3); // Different seed for existence
        if (treeHash < 0.5) return { exists: false }; // 50% chance
        
        // Check biome/island
        const islandData = this.getIslandData(cx, cz);
        if (!islandData.isIsland || islandData.center.type !== 'volcanic') return { exists: false };
        
        // Distance from tower
        const c = islandData.center;
        const tDx = cx - c.x;
        const tDz = cz - c.z;
        const distFromCenter = Math.sqrt(tDx*tDx + tDz*tDz);

        // --- EXCLUSION ZONES ---
        // 1. Clear Tower Area
        if (distFromCenter < 15) return { exists: false };

        // 2. Clear Edge
        if (distFromCenter > 42) return { exists: false };

        // 3. Molten Path (Door at +Z)
        if (Math.abs(tDx) < 6 && tDz > 2 && tDz < 50) return { exists: false };

        // 4. Check Pond/Lava Pool
        const pDx = cx - (c.x - 30);
        const pDz = cz - c.z;
        if (Math.sqrt(pDx*pDx + pDz*pDz) < 15) return { exists: false };

        // 5. Check River/Lava River
        const rDx = cx - c.x;
        const rDz = cz - c.z;
        if (rDx < -25 && Math.abs(rDz) < 6) return { exists: false };
        // -----------------------

        const H = 12 + Math.floor(treeHash * 4); // 12-16 height
        
        return { exists: true, x: cx, z: cz, height: H };
    }

    getFireTreeBlock(x, y, z, groundY) {
        const GRID = 14;
        const gx = Math.floor(x / GRID);
        const gz = Math.floor(z / GRID);
        
        const tree = this.getTreeInGrid(gx, gz);
        if (!tree.exists) return { exists: false };
        
        const cx = tree.x;
        const cz = tree.z;
        const H = tree.height;
        const localY = y - groundY;
        
        // Floating Embers (above tree)
        if (localY > H && localY < H + 4) {
            const emberHash = this.hash(x, y * z * 1.1);
            if (emberHash > 0.98) {
                const dx = x - cx;
                const dz = z - cz;
                if (Math.abs(dx) <= 2 && Math.abs(dz) <= 2) {
                    return { exists: true, color: 0xFFAA00 }; // Bright Orange Ember
                }
            }
        }

        if (localY < 0 || localY > H) return { exists: false };
        
        const dx = x - cx;
        const dz = z - cz;
        const adx = Math.abs(dx);
        const adz = Math.abs(dz);
        
        // Roots (Base)
        if (localY === 0) {
            // Cross shape roots
            if ((adx <= 2 && adz === 0) || (adz <= 2 && adx === 0) || (adx === 1 && adz === 1)) {
                 return { exists: true, color: 0x331100 }; // Dark Charred Wood
            }
        }
        if (localY === 1) {
             if ((adx <= 1 && adz === 0) || (adz <= 1 && adx === 0)) {
                 return { exists: true, color: 0x331100 };
            }
        }

        // Trunk
        if (adx === 0 && adz === 0 && localY < H/2) {
             return { exists: true, color: 0x331100 }; // Dark Charred Wood
        }
        
        // Flame Canopy (Tapered)
        const canopyStart = 4;
        if (localY >= canopyStart) {
            const canopyH = H - canopyStart;
            const progress = (localY - canopyStart) / canopyH; // 0 to 1
            
            let radius = 0;
            if (progress < 0.2) radius = 2;
            else if (progress < 0.5) radius = 2;
            else if (progress < 0.8) radius = 1;
            else radius = 0;
            
            // Manhattan distance for diamond/flame shape look
            if (adx + adz <= radius) {
                 // Core
                 return { exists: true, color: 0xFF4500 }; // Orange Red
            }
            if (adx + adz <= radius + 1) {
                 // Outer flame (random)
                 if (this.hash(x, y*z) > 0.3) {
                     return { exists: true, color: 0xFFA500 }; // Orange
                 }
            }
        }
        
        return { exists: false };
    }

    getIceTreeBlock(x, y, z, groundY) {
        const GRID = 12; // Spacing
        const gx = Math.floor(x / GRID);
        const gz = Math.floor(z / GRID);
        
        // Random Position (Jitter)
        // Grid 12 -> Center 6. Radius ~3. Safe margin ~3.
        const h1 = this.hash(gx, gz);
        const h2 = this.hash(gx + 99, gz + 88);
        
        // Jitter range: -2 to +2
        const offsetX = Math.floor((h1 - 0.5) * 4); 
        const offsetZ = Math.floor((h2 - 0.5) * 4);

        const cx = gx * GRID + 6 + offsetX;
        const cz = gz * GRID + 6 + offsetZ;
        
        // Check existence
        const treeHash = this.hash(gx, gz);
        if (treeHash < 0.4) return { exists: false }; // 60% chance
        
        // Check biome/island
        const islandData = this.getIslandData(cx, cz);
        if (!islandData.isIsland || islandData.center.type !== 'ice') return { exists: false };
        
        // Distance from tower
        const c = islandData.center;
        const tDx = cx - c.x;
        const tDz = cz - c.z;
        const distFromCenter = Math.sqrt(tDx*tDx + tDz*tDz);
        
        // 1. Clear Tower Area
        if (distFromCenter < 15) return { exists: false };
        
        // 2. Clear Edge (Prevent cut-off trees)
        if (distFromCenter > 42) return { exists: false };

        // 3. Clear Ice Path
        // Path is at x=0 (relative), z < -4 and z > -48
        if (Math.abs(tDx) < 6 && tDz < -2 && tDz > -50) return { exists: false };

        // Check Pond (using trunk position cx, cz)
        const pDx = cx - (c.x - 30);
        const pDz = cz - c.z;
        if (Math.sqrt(pDx*pDx + pDz*pDz) < 15) return { exists: false }; // Increased radius slightly to clear banks

        // Check River (using trunk position cx, cz)
        const rDx = cx - c.x;
        const rDz = cz - c.z;
        if (rDx < -25 && Math.abs(rDz) < 6) return { exists: false }; // Clear river area

        const H = 10 + Math.floor(treeHash * 5); // 10-14 height
        const localY = y - groundY;
        
        if (localY < 0 || localY > H) return { exists: false };
        
        const dx = x - cx;
        const dz = z - cz;
        const adx = Math.abs(dx);
        const adz = Math.abs(dz);
        const maxDist = Math.max(adx, adz); // Square distance
        
        // Trunk
        if (maxDist === 0 && localY < H/2) {
             return { exists: true, color: 0x2E5A88 }; // Dark Ice Blue
        }
        
        // Leaves (Tiered Squares)
        let radius = -1;
        if (localY >= H - 2) radius = 0; // Top tip
        else if (localY >= H - 4) radius = 1;
        else if (localY >= H - 7) radius = 2;
        else if (localY >= H - 10) radius = 3;
        
        // Cut off bottom of leaves
        if (localY < 3) radius = -1;

        if (radius >= 0 && maxDist <= radius) {
             const blockHash = this.hash(x, y * z);
             // Ice Palette: Pale Cyan, Electric Blue, Soft Blue
             const color = blockHash > 0.6 ? 0xA5F2F3 : (blockHash > 0.3 ? 0x7DF9FF : 0x50C0E0);
             return { exists: true, color: color };
        }
        
        return { exists: false };
    }

    getTerrainType(x, y, z) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const iz = Math.floor(z);
        
        const islandData = this.getIslandData(ix, iz);
        if (!islandData.isIsland) return 'void';
        
        const c = islandData.center;
        const biome = c.type;
        
        // Check Pond
        const pDx = ix - (c.x - 30);
        const pDz = iz - c.z;
        const pDist = Math.sqrt(pDx*pDx + pDz*pDz);
        if (pDist < 12) {
             // Pond water is roughly y=26 to y=30
             if (iy >= 26 && iy <= 30) {
                 if (biome === 'volcanic') return 'lava';
                 if (biome === 'ice') return 'ice';
                 return 'water';
             }
        }
        
        // Check River
        const rDx = ix - c.x;
        const rDz = iz - c.z;
        const isRiver = (rDx < -30 && Math.abs(rDz) < 3);
        
        // Waterfall Check (No collision)
        const isWaterfall = (isRiver && rDx < -48 && rDx > -55);
        if (isWaterfall) return false;

        if (isRiver) {
            // River water is roughly y=28 to y=30
            if (iy >= 28 && iy <= 30) {
                if (biome === 'volcanic') return 'lava';
                if (biome === 'ice') return 'ice';
                return 'water';
            }
        }
        
        if (biome === 'ice') {
            // Check Ice Path
            const tDx = ix - c.x;
            const tDz = iz - c.z;
            // Door is at -Z, so path goes -Z
            if (Math.abs(tDx) < 2.5 && tDz < -4 && tDz > -48) {
                // Path is on ground level (y=30)
                if (iy === 30) return 'ice';
            }
            
            return 'snow'; // Not slippery
        }

        if (biome === 'volcanic') {
            // Check Molten Path
            const tDx = ix - c.x;
            const tDz = iz - c.z;
            // Door is at +Z, so path goes +Z
            if (Math.abs(tDx) < 2.5 && tDz > 4 && tDz < 48) {
                if (iy === 30) return 'ground'; // Solid ground
            }
        }
        
        return 'ground';
    }

    getTreeInGrid(gx, gz) {
        const GRID = 14;
        
        // Random Position (Jitter)
        const h1 = this.hash(gx, gz);
        const h2 = this.hash(gx + 123, gz + 456);
        
        // Jitter range: -3 to +3
        const offsetX = Math.floor((h1 - 0.5) * 6); 
        const offsetZ = Math.floor((h2 - 0.5) * 6);

        const cx = gx * GRID + 7 + offsetX;
        const cz = gz * GRID + 7 + offsetZ;
        
        // Check existence
        const treeHash = this.hash(gx * 3, gz * 3); 
        if (treeHash < 0.5) return { exists: false }; 
        
        // Check biome/island
        const islandData = this.getIslandData(cx, cz);
        if (!islandData.isIsland || islandData.center.type !== 'volcanic') return { exists: false };
        
        // Distance from tower
        const c = islandData.center;
        const tDx = cx - c.x;
        const tDz = cz - c.z;
        const distFromCenter = Math.sqrt(tDx*tDx + tDz*tDz);

        // --- EXCLUSION ZONES ---
        // 1. Clear Tower Area
        if (distFromCenter < 15) return { exists: false };

        // 2. Clear Edge
        if (distFromCenter > 42) return { exists: false };

        // 3. Molten Path (Door at +Z)
        if (Math.abs(tDx) < 6 && tDz > 2 && tDz < 50) return { exists: false };

        // 4. Check Pond/Lava Pool
        const pDx = cx - (c.x - 30);
        const pDz = cz - c.z;
        if (Math.sqrt(pDx*pDx + pDz*pDz) < 15) return { exists: false };

        // 5. Check River/Lava River
        const rDx = cx - c.x;
        const rDz = cz - c.z;
        if (rDx < -25 && Math.abs(rDz) < 6) return { exists: false };
        // -----------------------

        const H = 12 + Math.floor(treeHash * 4); // 12-16 height
        
        return { exists: true, x: cx, z: cz, height: H };
    }
}
