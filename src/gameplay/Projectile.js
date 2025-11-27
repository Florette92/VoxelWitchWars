import * as THREE from 'three';

export class Projectile {
    constructor(scene, position, direction, particleSystem, soundManager, type = 'normal', damageMultiplier = 1) {
        this.scene = scene;
        this.particleSystem = particleSystem;
        this.soundManager = soundManager;
        this.type = type;
        this.velocity = direction.clone().normalize().multiplyScalar(60); // Speed
        this.isAlive = true;
        this.lifeTime = 1.5; // Seconds
        this.damage = 10 * damageMultiplier;

        // Visuals
        let color = 0x00ffff;
        let size = 0.3;
        
        if (this.type === 'fireball') {
            color = 0xff4400;
            size = 0.6;
            this.damage = 30 * damageMultiplier;
            this.lifeTime = 3.0;
        } else if (this.type === 'icebolt') {
            color = 0x00ffff; // Cyan
            size = 0.6;
            this.damage = 30 * damageMultiplier;
            this.lifeTime = 3.0;
        }

        const geometry = new THREE.SphereGeometry(size, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        
        // Add a point light to the projectile
        this.light = new THREE.PointLight(color, 1, 10);
        this.mesh.add(this.light);
        
        this.scene.add(this.mesh);
    }

    update(delta, world, remotePlayers) {
        if (!this.isAlive) return;

        this.lifeTime -= delta;
        if (this.lifeTime <= 0) {
            this.destroy();
            return;
        }

        // Tracer / Trail
        let trailColor = 0x00ffff;
        if (this.type === 'fireball') trailColor = 0xff4400;
        else if (this.type === 'icebolt') trailColor = 0x00ffff;

        this.particleSystem.emit(
            this.mesh.position, 
            trailColor, 
            1, // count
            0.5, // speed
            0.2 // life
        );

        const move = this.velocity.clone().multiplyScalar(delta);
        const distance = move.length();
        const direction = move.clone().normalize();

        // 1. Check Player Collision
        if (remotePlayers) {
            for (const [id, rp] of remotePlayers) {
                // Simple sphere check
                const distToPlayer = this.mesh.position.distanceTo(rp.mesh.position);
                const hitRadius = (this.type === 'fireball' || this.type === 'icebolt') ? 3.0 : 1.5;
                if (distToPlayer < hitRadius) { // Hit radius
                    this.onHitPlayer(id);
                    return;
                }
            }
        }

        // 2. Raycast for Block Collision
        const hit = world.raycast(this.mesh.position, direction, distance);

        if (hit) {
            // Move to hit point
            this.mesh.position.copy(hit.point);
            
            if (this.type === 'fireball' || this.type === 'icebolt') {
                // Explosion Logic
                const radius = 3;
                const cx = Math.floor(hit.point.x);
                const cy = Math.floor(hit.point.y);
                const cz = Math.floor(hit.point.z);
                
                for (let x = -radius; x <= radius; x++) {
                    for (let y = -radius; y <= radius; y++) {
                        for (let z = -radius; z <= radius; z++) {
                            if (x*x + y*y + z*z <= radius*radius) {
                                const destroyed = world.damageBlock(cx+x, cy+y, cz+z, 10); // Instant destroy
                                if (destroyed && this.onBlockDestroyedCallback) {
                                    this.onBlockDestroyedCallback(cx+x, cy+y, cz+z);
                                }
                            }
                        }
                    }
                }
            } else {
                // Damage block
                if (hit.block) {
                    const destroyed = world.damageBlock(hit.block.x, hit.block.y, hit.block.z, 1);
                    if (destroyed && this.onBlockDestroyedCallback) {
                        this.onBlockDestroyedCallback(hit.block.x, hit.block.y, hit.block.z);
                    }
                }
            }
            
            this.onHit();
            return;
        }

        this.mesh.position.add(move);
    }

    onHitPlayer(targetId) {
        // Visual effect
        if (this.soundManager) this.soundManager.playHit(); 
        if (this.particleSystem) {
            this.particleSystem.emit(this.mesh.position, 0xff0000, 20); // Red particles for blood/hit
        }
        
        // Notify Network
        if (this.onPlayerHitCallback) {
            this.onPlayerHitCallback(targetId, this.damage);
        }

        this.destroy();
    }

    onHit() {
        // Visual effect for hit
        if (this.soundManager) {
            if (this.type === 'fireball') {
                this.soundManager.playExplosion();
            } else {
                this.soundManager.playImpact();
            }
        }
        if (this.particleSystem) {
            this.particleSystem.emit(this.mesh.position, 0x00ffff, 15);
        }
        this.destroy();
    }

    destroy() {
        this.isAlive = false;
        this.scene.remove(this.mesh);
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
        this.light.dispose();
    }
}
