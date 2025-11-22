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

                // Island Shape: Inverted Cone
                const nDist = closestDist / maxRadius; // 0 to 1
                const maxDepth = 45;
                const bottomNoise = this.noise2D(worldX * 0.05, worldZ * 0.05) * 4;
                const depth = (maxDepth * (1 - Math.pow(nDist, 1.5))) + bottomNoise;
                
                const groundY = 30;
                let bottomY = Math.floor(groundY - Math.max(2, depth));
                
                if (isWaterfall) {
                    bottomY = -20; // Waterfall drops down
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
                const tDist = Math.sqrt(tDx*tDx + tDz*tDz);
                
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

                if (biome === 'ice') {
                    grassColor = 0xFFFFFF; // Snow
                    dirtColor = 0xDDDDFF; // Frozen Dirt
                    stoneColor = 0xAACCFF; // Icy Stone
                    wallColor1 = 0x446688; // Blue-Grey Stone
                    wallColor2 = 0x557799;
                    roofColor1 = 0x004488; // Deep Blue
                    roofColor2 = 0x003366;
                    woodColor = 0x332211; // Dark Pine
                    leafColor = 0x225544; // Dark Teal
                    windowColor = 0xAAFFFF; // Cyan Glow
                    rimColor = 0x223344;
                    hatBandColor = 0xFFFFFF; // White Band
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
                    grassColor = 0x222222; // Ash
                    dirtColor = 0x440000; // Magma
                    stoneColor = 0x111111; // Obsidian
                    wallColor1 = 0x220000; // Dark Red Stone
                    wallColor2 = 0x330000;
                    roofColor1 = 0x111111; // Black
                    roofColor2 = 0x222222;
                    woodColor = 0x111111; // Burnt
                    leafColor = 0xFF4400; // Fire/Ember
                    windowColor = 0xFF4400; // Red/Orange Glow
                    rimColor = 0x440000;
                    hatBandColor = 0xFF0000; // Red
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
                                blockColor = 0x4444ff; 
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
                                blockColor = 0x4444ff;
                                if (Math.random() > 0.8) blockColor = 0x8888ff; // Foam
                            } else if (y > bedY) {
                                // River water
                                blockColor = 0x4444ff;
                            } else {
                                // River bed
                                blockColor = dirtColor;
                            }
                        }
                        else {
                             const depthFromSurface = groundY - y;
                             if (depthFromSurface === 0) blockColor = grassColor; 
                             else if (depthFromSurface < 4) blockColor = dirtColor; 
                             else blockColor = stoneColor;
                        }
                    }
                    
                    // 2. Tower Structure
                    if (isTower && y > groundY) {
                        const localY = y - groundY;
                        
                        // Walls & Floors
                        if (localY <= towerHeight) {
                            // Check for floor rims (every 7 blocks)
                            const isRim = (localY % floorHeight === 0) || (localY % floorHeight === floorHeight - 1);
                            const currentRadius = isRim ? towerRadius + 0.5 : towerRadius;
                            
                            if (tDist <= currentRadius) {
                                if (tDist > currentRadius - 1.5) {
                                    // Wall
                                    visible = true;
                                    blockColor = isRim ? rimColor : (Math.random() > 0.5 ? wallColor1 : wallColor2);
                                    
                                    // Door (Ground Floor only)
                                    if (localY < 5 && tDz > 0 && Math.abs(tDx) < 1.5) {
                                        blockColor = woodColor; // Door
                                        if (localY > 3) visible = true; // Arch
                                        else visible = false; // Open door
                                    }
                                    
                                    // Windows (Floors 2, 3, 4)
                                    if (!isRim && localY > 7) {
                                        // Check cardinal directions for windows
                                        const isWindowSide = (Math.abs(tDx) < 1 || Math.abs(tDz) < 1);
                                        const windowY = localY % floorHeight;
                                        if (isWindowSide && windowY >= 2 && windowY <= 4) {
                                            blockColor = windowColor;
                                        }
                                    }
                                } else {
                                    // Interior
                                    // visible = false; 
                                }
                            }
                        }
                        // Roof & Hat
                        else {
                            const roofY = localY - towerHeight;
                            
                            // Roof Base (Overhang)
                            if (roofY <= 2) {
                                if (tDist <= towerRadius + 2 - roofY) {
                                    visible = true;
                                    blockColor = roofColor1;
                                }
                            }
                            // Hat Cone
                            else {
                                const hatHeight = 15;
                                const hatRadius = 4 * (1 - (roofY - 2) / hatHeight);
                                
                                // Hat Bend (Offset center slightly as we go up)
                                const bendX = Math.sin(roofY * 0.2) * 2;
                                const bendZ = Math.cos(roofY * 0.2) * 1;
                                const hatDist = Math.sqrt((tDx - bendX)**2 + (tDz - bendZ)**2);
                                
                                if (hatDist <= Math.max(0, hatRadius)) {
                                    visible = true;
                                    blockColor = roofColor1;
                                    
                                    // Orange Band
                                    if (roofY >= 4 && roofY <= 6) {
                                        blockColor = hatBandColor;
                                    }
                                }
                            }
                        }
                    }

                    // 4. Vegetation (Trees & Mushrooms)
                    if (y > groundY) {
                        const veg = this.getVegetationBlock(worldX, y, worldZ, groundY);
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
                    const r1 = this.hash(worldX, y + worldZ * 57);
                    const r2 = this.hash(worldX * 13, y * 7 + worldZ);
                    const r3 = this.hash(worldX + y * 3, worldZ * 11);

                    color.offsetHSL(
                        (r1 - 0.5) * 0.05,
                        (r2 - 0.5) * 0.05,
                        (r3 - 0.5) * 0.05
                    );
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
                this.generateChunk(chunkX + x, chunkZ + z);
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
            // If we want to collide with leaves we need to check neighbors too.
            // But simple trunk collision is a good start.
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
            const dist = Math.sqrt(dx*dx + dz*dz);
            
            const roofHeight = Math.floor(60 - 1.5 * dist);
            
            // Roof Collision (Only if we are high enough to hit it)
            // If we are on the ground (Y~30), we ignore the roof overhang
            if (checkY > 40) {
                if (roofHeight > 50) return roofHeight;
            }
            
            if (dist <= 5) {
                if (dist > 3.5) {
                    // Wall
                    // Check for door
                    // Door is 3 wide (dx < 1.5 means -1.5 to 1.5)
                    // We use a wider collision gap (1.8) to prevent getting stuck on the frame
                    if (dz > 0 && Math.abs(dx) < 1.8) { 
                        return 30; // Doorway is ground level
                    }
                    return 50; // Wall height
                } else {
                    // Interior
                    return 30;
                }
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
        const tDist = Math.sqrt(tDx*tDx + tDz*tDz);
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

        // Procedural
        const h = this.getHeight(ix, iz, iy);
        if (h === -Infinity) return false;
        
        return iy <= h;
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
        if (tDx*tDx + tDz*tDz <= 49) return '#555555'; // Tower Gray

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

    getVegetationBlock(x, y, z, groundY) {
        // 1. Legacy Trees (1x1 Columns)
        const treeH = this.getTreeHeight(x, z);
        if (treeH > 0) {
            const localY = y - groundY;
            if (localY > 0) {
                if (localY <= treeH) return { exists: true, color: 0x5C4033 }; // Wood
                if (localY <= treeH + 2) return { exists: true, color: 0x228B22 }; // Leaves
            }
        }

        // 2. Small Mushrooms - Removed
        return { exists: false };
    }
}
