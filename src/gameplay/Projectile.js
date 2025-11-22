import * as THREE from 'three';

export class Projectile {
    constructor(scene, position, direction, particleSystem, soundManager) {
        this.scene = scene;
        this.particleSystem = particleSystem;
        this.soundManager = soundManager;
        this.velocity = direction.clone().normalize().multiplyScalar(60); // Speed
        this.isAlive = true;
        this.lifeTime = 1.5; // Seconds
        this.damage = 10;

        // Visuals
        const geometry = new THREE.SphereGeometry(0.3, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        
        // Add a point light to the projectile
        this.light = new THREE.PointLight(0x00ffff, 1, 10);
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

        const move = this.velocity.clone().multiplyScalar(delta);
        const distance = move.length();
        const direction = move.clone().normalize();

        // 1. Check Player Collision
        if (remotePlayers) {
            for (const [id, rp] of remotePlayers) {
                // Simple sphere check
                const distToPlayer = this.mesh.position.distanceTo(rp.mesh.position);
                if (distToPlayer < 1.5) { // Hit radius
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
            
            // Remove block
            if (hit.block) {
                world.removeBlock(hit.block.x, hit.block.y, hit.block.z);
            }
            
            this.onHit();
            return;
        }

        this.mesh.position.add(move);
    }

    onHitPlayer(targetId) {
        // Visual effect
        if (this.soundManager) this.soundManager.playExplosion(); // Reuse explosion sound for now
        if (this.particleSystem) {
            this.particleSystem.emit(this.mesh.position, 0xff0000, 20); // Red particles for blood/hit
        }
        
        // Notify Network
        // We need access to networkManager here, or return the hit info
        // Since we don't have networkManager passed in, we can return true or call a callback if we add one.
        // Better: Pass a callback to update() or constructor.
        // For now, let's assume the caller handles the return value if we change update to return hit info?
        // No, update is void usually.
        // Let's add onHitCallback to the projectile.
        
        if (this.onPlayerHitCallback) {
            this.onPlayerHitCallback(targetId, this.damage);
        }

        this.destroy();
    }

    onHit() {
        // Visual effect for hit
        if (this.soundManager) this.soundManager.playExplosion();
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
