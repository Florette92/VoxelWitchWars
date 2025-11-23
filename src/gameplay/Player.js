import * as THREE from 'three';
import { InputManager } from '../core/InputManager.js';
import { Projectile } from './Projectile.js';

export class Player {
    constructor(scene, camera, world, initialPosition, particleSystem, soundManager, networkManager) {
        this.scene = scene;
        this.camera = camera;
        this.world = world;
        this.particleSystem = particleSystem;
        this.soundManager = soundManager;
        this.networkManager = networkManager;
        this.input = new InputManager();
        this.isDead = false;
        this.spawnPoint = initialPosition ? initialPosition.clone() : new THREE.Vector3(10, 20, 10);

        // Network Timer
        this.networkTimer = 0;
        this.networkInterval = 0.05; // 20 updates per second

        // Player Mesh (Witch Model)
        this.mesh = new THREE.Group();
        this.mesh.position.set(10, 20, 10);
        
        // Body (Robe)
        const bodyGeo = new THREE.ConeGeometry(0.5, 1.5, 8);
        this.bodyMat = new THREE.MeshStandardMaterial({ color: 0x2a0a4d }); // Dark purple
        const body = new THREE.Mesh(bodyGeo, this.bodyMat);
        body.position.y = 0.75;
        this.mesh.add(body);

        // Head
        const headGeo = new THREE.SphereGeometry(0.3, 8, 8);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffccaa }); // Skin tone
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.6;
        this.mesh.add(head);

        // Hat Brim
        const brimGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.05, 8);
        this.hatMat = new THREE.MeshStandardMaterial({ color: 0x111111 }); // Black
        const brim = new THREE.Mesh(brimGeo, this.hatMat);
        brim.position.y = 1.85;
        this.mesh.add(brim);

        // Hat Cone
        const hatConeGeo = new THREE.ConeGeometry(0.3, 0.8, 8);
        const hatCone = new THREE.Mesh(hatConeGeo, this.hatMat);
        hatCone.position.y = 2.2;
        hatCone.rotation.x = -0.2; // Tilted back slightly
        this.mesh.add(hatCone);

        // Hands
        const handGeo = new THREE.SphereGeometry(0.12, 8, 8);
        
        const leftHand = new THREE.Mesh(handGeo, headMat);
        leftHand.position.set(-0.4, 1.0, 0.3);
        this.mesh.add(leftHand);

        const rightHand = new THREE.Mesh(handGeo, headMat);
        rightHand.position.set(0.4, 1.0, 0.3);
        this.mesh.add(rightHand);

        // Wand
        this.wand = this.createWand();
        // Align with right hand
        this.wand.position.copy(rightHand.position);
        // Adjust so the hand holds the lower part of the shaft
        this.wand.position.y += 0.3; 
        
        // Tilt 25 degrees away from body
        this.wand.rotation.z = -25 * (Math.PI / 180);
        // Compensate for rotation to keep handle in hand
        this.wand.position.x += 0.12;

        this.mesh.add(this.wand);

        // Broom (Vehicle)
        this.broom = this.createBroom();
        this.broom.visible = false; // Hidden by default
        this.mesh.add(this.broom);

        if (initialPosition) {
            this.mesh.position.copy(initialPosition);
        } else {
            this.mesh.position.set(10, 20, 10);
        }
        
        this.mesh.traverse(c => c.castShadow = true);
        this.scene.add(this.mesh);

        // Physics
        this.velocity = new THREE.Vector3();
        this.onGround = false;
        this.gravity = -30;
        this.speed = 10;
        this.flySpeed = 25;
        this.jumpForce = 10;
        this.isFlying = false;
        this.flyTogglePressed = false;

        // Combat
        this.projectiles = [];
        this.lastShotTime = 0;
        this.shootCooldown = 0.3; // Seconds
        this.abilityCooldown = 5.0;
        this.lastAbilityTime = 0;
        this.dashCooldown = 3.0;
        this.lastDashTime = 0;
        this.team = 'spectator'; // Default
        
        // Mana System
        this.maxMana = 100;
        this.mana = 100;
        this.manaRegen = 5; // Mana per second
        this.abilityCost = 40; // Cost for Fireball/Ice Wall

        // Build Mode
        this.isBuildMode = false;
        this.buildTogglePressed = false;
        this.buildCooldown = 0.2;
        this.lastBuildTime = 0;
        
        // Ghost Block
        const ghostGeo = new THREE.BoxGeometry(1.01, 1.01, 1.01);
        const ghostMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, transparent: true, opacity: 0.5 });
        this.ghostBlock = new THREE.Mesh(ghostGeo, ghostMat);
        this.scene.add(this.ghostBlock);
        this.ghostBlock.visible = false;

        // Physics position (separate from visual mesh for smoothing)
        this.physicsPosition = this.mesh.position.clone();

        // Camera
        this.cameraOffset = new THREE.Vector3(0, 2, 5);
        this.rotation = new THREE.Euler(0, 0, 0, 'YXZ');

        // Biome Outfit
        this.currentBiome = 'ice';
        this.checkBiomeTimer = 0;

        // Potions / Buffs
        this.speedBuffTimer = 0;
        this.damageBuffTimer = 0;
        this.shield = 0;
        
        // Environmental
        this.lavaDamageTimer = 0;
    }

    get position() {
        return this.physicsPosition;
    }

    update(delta, remotePlayers) {
        if (this.isDead) return;

        // Buff Timers
        if (this.speedBuffTimer > 0) this.speedBuffTimer -= delta;
        if (this.damageBuffTimer > 0) this.damageBuffTimer -= delta;

        // Mana Regen
        if (this.mana < this.maxMana) {
            this.mana += this.manaRegen * delta;
            if (this.mana > this.maxMana) this.mana = this.maxMana;
            this.updateManaUI();
        }

        // Network Update
        this.networkTimer += delta;
        if (this.networkTimer >= this.networkInterval) {
            this.networkTimer = 0;
            if (this.networkManager) {
                this.networkManager.sendMove(this.physicsPosition, this.rotation, this.currentBiome);
            }
        }

        // Update Projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.update(delta, this.world, remotePlayers);
            if (!p.isAlive) {
                this.projectiles.splice(i, 1);
            }
        }
        if (this.input.isKeyDown('KeyF')) {
            if (!this.flyTogglePressed) {
                this.isFlying = !this.isFlying;
                this.flyTogglePressed = true;
                
                this.broom.visible = this.isFlying;
                if (this.isFlying) {
                    this.velocity.y = 0;
                    this.mesh.rotation.x = 0.3; // Lean forward
                    this.mesh.position.y += 1; // Hop up
                } else {
                    this.mesh.rotation.x = 0;
                }
            }
        } else {
            this.flyTogglePressed = false;
        }

        // Toggle Build Mode
        if (this.input.isKeyDown('KeyB')) {
            if (!this.buildTogglePressed) {
                this.isBuildMode = !this.isBuildMode;
                this.buildTogglePressed = true;
                this.ghostBlock.visible = this.isBuildMode;
                
                // Show/Hide Wand based on mode? Maybe keep wand for building.
            }
        } else {
            this.buildTogglePressed = false;
        }

        if (this.isBuildMode) {
            this.updateBuildMode(delta);
        } else {
            this.ghostBlock.visible = false;
            
            // Shooting (Only when not building)
            this.lastShotTime += delta;
            if (this.input.isMouseButtonDown(0) && this.lastShotTime >= this.shootCooldown) {
                this.shoot();
                this.lastShotTime = 0;
            }
        }

        // Update Projectiles (Moved to top)


        // Input Handling
        const mouseMove = this.input.getMouseMovement();
        this.rotation.y -= mouseMove.x * 0.002;
        this.rotation.x -= mouseMove.y * 0.002;
        this.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotation.x));

        // Dash Ability (Shift)
        if (this.input.isKeyDown('ShiftLeft') && !this.isFlying) {
            const now = performance.now() / 1000;
            if (now - this.lastDashTime > this.dashCooldown) {
                this.performDash();
                this.lastDashTime = now;
            }
        }

        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y);

        const direction = new THREE.Vector3();
        if (this.input.isKeyDown('KeyW')) direction.add(forward);
        if (this.input.isKeyDown('KeyS')) direction.sub(forward);
        if (this.input.isKeyDown('KeyD')) direction.add(right);
        if (this.input.isKeyDown('KeyA')) direction.sub(right);

        if (direction.length() > 0) direction.normalize();

        // Movement
        let currentSpeed = this.isFlying ? this.flySpeed : this.speed;
        if (this.speedBuffTimer > 0) currentSpeed *= 2; // Speed Potion

        const targetVx = direction.x * currentSpeed;
        const targetVz = direction.z * currentSpeed;

        // Check Terrain
        const terrain = this.world.getTerrainType(this.physicsPosition.x, this.physicsPosition.y - 0.5, this.physicsPosition.z);
        
        // Friction / Inertia
        let responsiveness = 20.0; // Default snappy
        if (terrain === 'ice' && !this.isFlying && this.onGround) {
            responsiveness = 1.0; // Slippery
        }

        const alpha = 1 - Math.exp(-responsiveness * delta);
        this.velocity.x += (targetVx - this.velocity.x) * alpha;
        this.velocity.z += (targetVz - this.velocity.z) * alpha;

        // Lava Damage
        if (terrain === 'lava' && !this.isFlying) {
            this.lavaDamageTimer += delta;
            if (this.lavaDamageTimer > 0.5) {
                this.lavaDamageTimer = 0;
                // Self-inflict damage via network
                if (this.networkManager && this.networkManager.playerId) {
                    this.networkManager.sendHit(this.networkManager.playerId, 5);
                    // Visual feedback
                    this.particleSystem.emit(this.position, 0xff4400, 10);
                }
            }
        } else {
            this.lavaDamageTimer = 0;
        }

        if (this.isFlying) {
            // Flight Vertical Movement
            if (this.input.isKeyDown('Space')) {
                this.velocity.y = currentSpeed * 0.5;
            } else if (this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('KeyC')) {
                this.velocity.y = -currentSpeed * 0.5;
            } else {
                this.velocity.y = 0;
            }
        } else {
            // Jump
            if (this.onGround && this.input.isKeyDown('Space')) {
                this.velocity.y = this.jumpForce;
                this.onGround = false;
            }
            // Gravity
            this.velocity.y += this.gravity * delta;
        }

        // Animate Wand Particles
        if (this.wandParticles) {
            this.wandParticles.rotation.y += delta * 2;
            this.wandParticles.rotation.z += delta * 1;
        }

        // Collision Detection
        // ...existing code...

        // Calculate potential new position
        const originalPos = this.physicsPosition.clone();
        
        // X Movement
        this.physicsPosition.x += this.velocity.x * delta;
        if (this.checkCollision(this.physicsPosition)) {
            this.physicsPosition.x = originalPos.x;
            this.velocity.x = 0;
        }

        // Z Movement
        this.physicsPosition.z += this.velocity.z * delta;
        if (this.checkCollision(this.physicsPosition)) {
            this.physicsPosition.z = originalPos.z;
            this.velocity.z = 0;
        }

        // Y Movement
        this.physicsPosition.y += this.velocity.y * delta;
        if (this.checkCollision(this.physicsPosition)) {
            // If moving down (falling)
            if (this.velocity.y < 0) {
                this.onGround = true;
                // Revert to prevent clipping
                this.physicsPosition.y = originalPos.y;
            } else {
                // Hit head
                this.physicsPosition.y = originalPos.y;
            }
            this.velocity.y = 0;
        } else {
            this.onGround = false;
        }

        // Respawn if fallen too far
        if (this.physicsPosition.y < -50) {
            this.onDeath();
        }

        // Smoothly update visual mesh position
        this.mesh.position.x = this.physicsPosition.x;
        this.mesh.position.z = this.physicsPosition.z;
        this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, this.physicsPosition.y, 10 * delta);

        // Update Camera
        // Pivot from neck (approx height 1.5)
        const pivot = this.mesh.position.clone().add(new THREE.Vector3(0, 1.5, 0));
        
        // Offset from neck to camera (Right 1.5, Up 1.0, Back 5)
        const offset = new THREE.Vector3(1.5, 1.0, 5);
        offset.applyEuler(this.rotation);
        
        const cameraPos = pivot.clone().add(offset);
        this.camera.position.copy(cameraPos);

        // Look direction matches rotation
        const viewDirection = new THREE.Vector3(0, 0, -1);
        viewDirection.applyEuler(this.rotation);
        
        const lookTarget = cameraPos.clone().add(viewDirection.multiplyScalar(20));
        this.camera.lookAt(lookTarget);
        
        // Rotate player mesh
        this.mesh.rotation.y = this.rotation.y;

        if (this.isFlying) {
            // Flight Tilt Controls (WASD affects mesh tilt)
            const tiltSpeed = 5.0;
            let targetPitch = 0.3; // Default forward lean
            let targetRoll = 0;

            if (this.input.isKeyDown('KeyW')) targetPitch = 0.8; // Dive/Forward
            if (this.input.isKeyDown('KeyS')) targetPitch = -0.2; // Pull up/Back
            
            if (this.input.isKeyDown('KeyA')) targetRoll = 0.5; // Bank Left
            if (this.input.isKeyDown('KeyD')) targetRoll = -0.5; // Bank Right

            this.mesh.rotation.x = THREE.MathUtils.lerp(this.mesh.rotation.x, targetPitch, delta * tiltSpeed);
            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, targetRoll, delta * tiltSpeed);

            // Emit trail particles
            if (this.particleSystem) {
                const tailPos = new THREE.Vector3(0, 0, 1.4);
                tailPos.applyMatrix4(this.broom.matrixWorld);
                this.particleSystem.emit(tailPos, 0xeebb55, 2);
            }
        } else {
            // Reset tilt when walking
            this.mesh.rotation.x = THREE.MathUtils.lerp(this.mesh.rotation.x, 0, delta * 10);
            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0, delta * 10);
        }
    }

    setTeam(team) {
        this.team = team;
        // Update visuals if needed
    }

    performDash() {
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y);
        this.velocity.add(forward.multiplyScalar(40)); // Burst of speed
        if (this.soundManager) this.soundManager.playJump(); // Reuse jump sound or add dash sound
        if (this.particleSystem) {
            // Trail effect
            for(let i=0; i<10; i++) {
                this.particleSystem.emit(this.mesh.position.clone(), 0xffffff, 5);
            }
        }
    }

    updateManaUI() {
        const bar = document.getElementById('mana-bar');
        const text = document.getElementById('mana-text');
        if (bar && text) {
            bar.style.width = `${(this.mana / this.maxMana) * 100}%`;
            text.textContent = `${Math.floor(this.mana)} / ${this.maxMana}`;
        }
    }

    shoot() {
        const damageMult = this.damageBuffTimer > 0 ? 2 : 1;
        const projectile = new Projectile(
            this.scene, 
            this.wand.getWorldPosition(new THREE.Vector3()), 
            this.camera.getWorldDirection(new THREE.Vector3()), 
            this.particleSystem,
            this.soundManager,
            'normal',
            damageMult
        );
        this.projectiles.push(projectile);
        this.soundManager.playShoot();
    }

    useAbility() {
        if (this.mana < this.abilityCost) return;

        const damageMult = this.damageBuffTimer > 0 ? 2 : 1;

        if (this.team === 'red') {
            // Fireball
            const projectile = new Projectile(
                this.scene, 
                this.wand.getWorldPosition(new THREE.Vector3()), 
                this.camera.getWorldDirection(new THREE.Vector3()), 
                this.particleSystem,
                this.soundManager,
                'fireball',
                damageMult
            );
            this.projectiles.push(projectile);
            this.mana -= this.abilityCost;
            this.updateManaUI();
        } else if (this.team === 'blue') {
            // Ice Wall (No damage mult needed usually, but kept for consistency if needed)
            // ...existing code...
        }
    }

    applyPotion(type) {
        console.log("Applied potion:", type);
        if (type === 'speed') {
            this.speedBuffTimer = 10.0;
        } else if (type === 'shield') {
            this.shield += 50;
            // Update Health UI to show shield? 
            // For now, maybe just a visual effect or console log.
            // Or we can hack the health bar to show > 100?
            this.networkManager.onHealthUpdate(this.health + this.shield); // Hacky update
        } else if (type === 'berserk') {
            this.damageBuffTimer = 10.0;
        }
    }
}
