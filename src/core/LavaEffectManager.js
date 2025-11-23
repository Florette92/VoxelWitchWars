import * as THREE from 'three';

export class LavaEffectManager {
    constructor(scene, voxelWorld, particleSystem, player) {
        this.scene = scene;
        this.world = voxelWorld;
        this.particleSystem = particleSystem;
        this.player = player;
        
        this.volcanicIslands = [];
        this.burningTrees = [];
        this.scanForVolcanicIslands();
        this.scanForTrees();

        // Lights
        this.lavaLights = [];
        const maxLights = 3;
        for(let i=0; i<maxLights; i++) {
            const light = new THREE.PointLight(0xff4400, 2, 20);
            light.visible = false;
            this.scene.add(light);
            this.lavaLights.push(light);
        }

        this.spawnTimer = 0;
    }

    scanForVolcanicIslands() {
        // Access internal island centers from VoxelWorld
        if (this.world.islandCenters) {
            for (const c of this.world.islandCenters) {
                if (c.type === 'volcanic') {
                    this.volcanicIslands.push(c);
                }
            }
        }
    }

    scanForTrees() {
        // Scan for trees in volcanic islands to add fire effects
        const GRID = 14;
        const islandRadius = 50;

        for (const island of this.volcanicIslands) {
            // Scan a grid around the island center
            const startX = Math.floor((island.x - islandRadius) / GRID);
            const endX = Math.floor((island.x + islandRadius) / GRID);
            const startZ = Math.floor((island.z - islandRadius) / GRID);
            const endZ = Math.floor((island.z + islandRadius) / GRID);

            for (let gx = startX; gx <= endX; gx++) {
                for (let gz = startZ; gz <= endZ; gz++) {
                    const cx = gx * GRID + 7;
                    const cz = gz * GRID + 7;

                    // Check if this grid cell has a tree (logic from VoxelWorld)
                    const treeHash = this.world.hash(gx, gz);
                    if (treeHash >= 0.5) {
                        const ctDx = cx - island.x;
                        const ctDz = cz - island.z;
                        if (Math.sqrt(ctDx*ctDx + ctDz*ctDz) >= 12) {
                            // Tree exists here
                            // Calculate height
                            const height = 12 + Math.floor(treeHash * 4);
                            
                            this.burningTrees.push({
                                x: cx,
                                y: 30 + height - 2, // Near top
                                z: cz
                            });
                        }
                    }
                }
            }
        }
    }

    update(delta) {
        // 1. Manage Lights based on player position
        this.updateLights();

        // 2. Spawn Particles
        this.spawnTimer += delta;
        if (this.spawnTimer > 0.1) { // 10 times a second
            this.spawnTimer = 0;
            this.spawnLavaParticles();
            this.spawnTreeFire();
        }
    }

    updateLights() {
        // Find closest volcanic island
        let closestDist = Infinity;
        let closestIsland = null;

        const pPos = this.player.position;

        for (const island of this.volcanicIslands) {
            const dx = pPos.x - island.x;
            const dz = pPos.z - island.z;
            const dist = Math.sqrt(dx*dx + dz*dz);
            if (dist < closestDist) {
                closestDist = dist;
                closestIsland = island;
            }
        }

        // If close enough to a volcanic island, activate lights
        if (closestIsland && closestDist < 60) {
            // Position lights around the player but snapped to lava height
            // Or position them at fixed points in the lava pond
            
            // Strategy: Place lights in the pond/river near the player
            
            // Pond Center: island.x - 30, island.z
            const pondX = closestIsland.x - 30;
            const pondZ = closestIsland.z;
            
            // River Start: island.x - 30, island.z
            // River End: island.x - 60, island.z (roughly)
            
            // Let's animate lights floating over the pond
            const time = performance.now() * 0.001;
            
            this.lavaLights.forEach((light, index) => {
                light.visible = true;
                
                // Orbit around pond center
                const angle = time * 0.5 + (index * (Math.PI * 2 / this.lavaLights.length));
                const radius = 8 + Math.sin(time * 2 + index) * 2;
                
                light.position.set(
                    pondX + Math.cos(angle) * radius,
                    32, // Slightly above lava (y=30)
                    pondZ + Math.sin(angle) * radius
                );
                
                // Flicker intensity
                light.intensity = 2 + Math.sin(time * 10 + index) * 0.5;
            });

        } else {
            // Hide lights
            this.lavaLights.forEach(l => l.visible = false);
        }
    }

    spawnLavaParticles() {
        // Spawn particles in active volcanic islands
        // To save performance, only spawn near player if player is near one
        
        const pPos = this.player.position;
        
        for (const island of this.volcanicIslands) {
            const dx = pPos.x - island.x;
            const dz = pPos.z - island.z;
            const dist = Math.sqrt(dx*dx + dz*dz);
            
            if (dist < 80) { // Only if player is somewhat close
                // Spawn in Pond
                const pondX = island.x - 30;
                const pondZ = island.z;
                
                // Random point in pond (radius 12)
                for(let i=0; i<2; i++) {
                    const r = Math.sqrt(Math.random()) * 11; // Bias towards outside slightly
                    const theta = Math.random() * Math.PI * 2;
                    
                    const x = pondX + r * Math.cos(theta);
                    const z = pondZ + r * Math.sin(theta);
                    const y = 30.5; // Surface
                    
                    // Emit Bubble/Spark
                    // Color: Orange/Yellow
                    const color = Math.random() > 0.5 ? 0xFF4500 : 0xFFFF00;
                    
                    // Upward gravity (buoyancy)
                    this.particleSystem.emit(
                        new THREE.Vector3(x, y, z),
                        color,
                        1, // count
                        2, // speed
                        1.5, // life
                        5 // gravity (up)
                    );
                }
                
                // Spawn in River (x < -30 relative to center)
                // River is roughly x from -30 to -60, z width +/- 3
                for(let i=0; i<1; i++) {
                    const rx = island.x - 30 - Math.random() * 30;
                    const rz = island.z + (Math.random() - 0.5) * 6;
                    const ry = 30.5;
                    
                    this.particleSystem.emit(
                        new THREE.Vector3(rx, ry, rz),
                        0xFF4500,
                        1,
                        2,
                        1.0,
                        5
                    );
                }
            }
        }
    }

    spawnTreeFire() {
        const pPos = this.player.position;
        
        for (const tree of this.burningTrees) {
            // Only spawn if close to player
            const dx = pPos.x - tree.x;
            const dz = pPos.z - tree.z;
            const distSq = dx*dx + dz*dz;
            
            if (distSq < 60 * 60) { // 60 units distance
                // Spawn fire particle
                // Random offset around tree top
                const ox = (Math.random() - 0.5) * 2;
                const oz = (Math.random() - 0.5) * 2;
                const oy = (Math.random() - 0.5) * 2;
                
                const color = Math.random() > 0.5 ? 0xFF4500 : 0xFFA500; // Red-Orange / Orange
                
                this.particleSystem.emit(
                    new THREE.Vector3(tree.x + ox, tree.y + oy, tree.z + oz),
                    color,
                    1, // count
                    1, // speed
                    0.8, // life
                    5 // gravity (up)
                );
            }
        }
    }
}
