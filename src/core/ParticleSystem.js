import * as THREE from 'three';

export class ParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
        
        // Reusable geometry/material
        this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    }

    emit(pos, color, count = 5, speed = 5, life = 1.0, gravity = -10) {
        for (let i = 0; i < count; i++) {
            const mesh = new THREE.Mesh(this.geometry, this.material.clone());
            mesh.material.color.setHex(color);
            
            mesh.position.copy(pos);
            
            // Random spread
            mesh.position.x += (Math.random() - 0.5) * 0.5;
            mesh.position.y += (Math.random() - 0.5) * 0.5;
            mesh.position.z += (Math.random() - 0.5) * 0.5;

            // Random velocity
            const velocity = new THREE.Vector3(
                (Math.random() - 0.5),
                (Math.random() - 0.5),
                (Math.random() - 0.5)
            ).normalize().multiplyScalar(speed * Math.random());

            this.particles.push({
                mesh: mesh,
                velocity: velocity,
                life: life,
                maxLife: life,
                gravity: gravity
            });

            this.scene.add(mesh);
        }
    }

    update(delta) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.life -= delta;
            
            // Move
            p.mesh.position.add(p.velocity.clone().multiplyScalar(delta));
            
            // Gravity
            p.velocity.y += p.gravity * delta;
            
            // Scale down
            const scale = p.life / p.maxLife;
            p.mesh.scale.setScalar(scale);

            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                // p.mesh.geometry.dispose(); // Shared geometry
                p.mesh.material.dispose();
                this.particles.splice(i, 1);
            }
        }
    }
}
