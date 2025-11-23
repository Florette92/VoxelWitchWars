import * as THREE from 'three';

export class LavaEffectManager {
    constructor(scene, voxelWorld, particleSystem, player) {
        this.scene = scene;
        this.world = voxelWorld;
        this.particleSystem = particleSystem;
        this.player = player;
        
        this.volcanicIslands = [];
        this.scanForVolcanicIslands();

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

    update(delta) {
        // 1. Manage Lights based on player position
        this.updateLights();

        // 2. Spawn Particles
        this.spawnTimer += delta;
        if (this.spawnTimer > 0.1) { // 10 times a second
            this.spawnTimer = 0;
            this.spawnLavaParticles();
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
}
