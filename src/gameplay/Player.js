import * as THREE from 'three';
import { InputManager } from '../core/InputManager.js';
import { Projectile } from './Projectile.js';

export class Player {
    constructor(scene, camera, world, initialPosition, particleSystem, soundManager, networkManager, characterClass = 'witch') {
        this.scene = scene;
        this.camera = camera;
        this.world = world;
        this.particleSystem = particleSystem;
        this.soundManager = soundManager;
        this.networkManager = networkManager;
        this.characterClass = characterClass;
        this.input = new InputManager();
        this.isDead = false;
        this.spawnPoint = initialPosition ? initialPosition.clone() : new THREE.Vector3(10, 20, 10);

        // Network Timer
        this.networkTimer = 0;
        this.networkInterval = 0.05; // 20 updates per second

        // Player Mesh (Witch/Warlock Model)
        const charData = this.characterClass === 'warlock' ? this.createWarlockMesh() : this.createWitchMesh();
        this.mesh = charData.mesh;
        this.mesh.position.set(10, 20, 10);
        
        // Wand
        this.wand = this.createWand();
        // Attach to left hand
        charData.leftArm.add(this.wand);
        this.wand.position.set(0, -0.4, 0.2); // In hand
        this.wand.rotation.x = Math.PI / 2; // Point forward

        // Broom (Vehicle)
        this.broom = this.createBroom();
        this.broom.visible = false; // Hidden by default
        this.mesh.add(this.broom);
        // Adjust broom position to sit under the character
        this.broom.position.set(0, 0.5, 0);

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
        this.footstepTimer = 0;
    }

    setSpawnPoint(point) {
        this.spawnPoint.copy(point);
    }

    get position() {
        return this.physicsPosition;
    }

    setCharacterClass(className) {
        if (this.characterClass === className) return;
        
        this.characterClass = className;
        const oldPosition = this.mesh.position.clone();
        const oldRotation = this.mesh.rotation.clone();
        
        // Remove old mesh
        this.scene.remove(this.mesh);
        
        // Create new mesh
        const charData = this.characterClass === 'warlock' ? this.createWarlockMesh() : this.createWitchMesh();
        this.mesh = charData.mesh;
        
        // Restore transform
        this.mesh.position.copy(oldPosition);
        this.mesh.rotation.copy(oldRotation);
        
        // Re-setup attachments
        // Wand
        this.wand = this.createWand();
        charData.leftArm.add(this.wand);
        this.wand.position.set(0, -0.4, 0.2);
        this.wand.rotation.x = Math.PI / 2;

        // Broom
        this.broom = this.createBroom();
        this.broom.visible = false;
        this.mesh.add(this.broom);
        this.broom.position.set(0, 0.5, 0);
        
        this.mesh.traverse(c => c.castShadow = true);
        this.scene.add(this.mesh);
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

        // Footsteps
        if (this.onGround && !this.isFlying && (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.z) > 0.1)) {
            this.footstepTimer += delta;
            if (this.footstepTimer > 0.4) { // Every 0.4s
                this.soundManager.playFootstep();
                this.footstepTimer = 0;
            }
        } else {
            this.footstepTimer = 0.4; // Ready to play immediately on land/move
        }

        // Lava Damage
        if (terrain === 'lava') {
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
            // Ice Wall
            const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
            const target = this.camera.position.clone().add(forward.multiplyScalar(5));
            
            const bx = Math.floor(target.x);
            const by = Math.floor(target.y);
            const bz = Math.floor(target.z);

            // Create a 3x3 wall
            for(let x = -1; x <= 1; x++) {
                for(let y = 0; y < 3; y++) {
                    // Simplified: Just place 3 blocks high at target
                    // Use addBlock with Ice color (0x88ccff)
                    this.world.addBlock(bx, by + y, bz, 0x88ccff); 
                    if (this.networkManager) {
                        this.networkManager.sendBlockUpdate(bx, by + y, bz, 2); // 2 = Ice ID for network
                    }
                }
            }
            
            this.mana -= this.abilityCost;
            this.updateManaUI();
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
            if (this.networkManager) {
                this.networkManager.onHealthUpdate(this.health + this.shield); // Hacky update
            }
        } else if (type === 'berserk') {
            this.damageBuffTimer = 10.0;
        }
    }

    createWand() {
        const wandGroup = new THREE.Group();
        
        // Shaft
        const shaftGeo = new THREE.CylinderGeometry(0.02, 0.03, 0.8, 8);
        const shaftMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 }); // Dark wood
        const shaft = new THREE.Mesh(shaftGeo, shaftMat);
        // Default Cylinder is along Y axis, which is what we want for the tilt logic
        wandGroup.add(shaft);

        // Gem
        const gemGeo = new THREE.DodecahedronGeometry(0.06);
        const gemMat = new THREE.MeshStandardMaterial({ 
            color: 0x00ffff, 
            emissive: 0x0088ff,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.9
        });
        const gem = new THREE.Mesh(gemGeo, gemMat);
        gem.position.y = 0.4; // Tip of wand (Y axis)
        wandGroup.add(gem);
        
        // Store reference for particles
        this.wandParticles = gem;

        return wandGroup;
    }

    createBroom() {
        const broomGroup = new THREE.Group();
        
        // Materials
        const handleMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 }); // Dark Wood
        const bandMat = new THREE.MeshStandardMaterial({ color: 0x3e2723 }); // Darker band
        const bristleMat = new THREE.MeshStandardMaterial({ color: 0xd4a017 }); // Golden/Orange

        // 1. Handle (Long stick)
        const handleGeo = new THREE.BoxGeometry(0.05, 0.05, 2.0);
        const handle = new THREE.Mesh(handleGeo, handleMat);
        handle.position.z = -0.5; 
        broomGroup.add(handle);

        // 2. Connector Band
        const bandGeo = new THREE.BoxGeometry(0.07, 0.07, 0.1);
        const band = new THREE.Mesh(bandGeo, bandMat);
        band.position.z = 0.55; 
        broomGroup.add(band);

        // 3. Bristles (Voxel style)
        const bristleGroup = new THREE.Group();
        bristleGroup.position.z = 0.6;

        // Core
        const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.4), bristleMat);
        b1.position.z = 0.2;
        bristleGroup.add(b1);

        // Fluff (Top/Bottom/Left/Right) - making it look like the voxel ball in the image
        const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 0.3), bristleMat);
        b2.position.z = 0.2;
        bristleGroup.add(b2);

        const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.3), bristleMat);
        b3.position.z = 0.2;
        bristleGroup.add(b3);

        broomGroup.add(bristleGroup);

        // Position relative to player
        broomGroup.position.set(0, 0.6, 0); 
        
        return broomGroup;
    }

    createWitchMesh() {
        const mesh = new THREE.Group();
        const content = new THREE.Group(); // Wrapper to rotate model
        mesh.add(content);
        
        // Rotate 180 degrees so face points to -Z (Forward)
        content.rotation.y = Math.PI;

        // Colors
        const skinColor = 0xffccaa;
        const robeColor = 0x4b0082; // Indigo/Purple
        const hatColor = 0x330066; // Darker Purple
        const hatBandColor = 0xff0000; // Red
        const hairColor = 0xffa500; // Orange
        const bootColor = 0x111111;

        // 1. Body (Robe) - Voxel Box
        const bodyGeo = new THREE.BoxGeometry(0.5, 0.8, 0.4);
        const bodyMat = new THREE.MeshStandardMaterial({ color: robeColor });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = 0.9; // Legs are below
        content.add(body);

        // 2. Skirt/Robe Bottom
        const skirtGeo = new THREE.BoxGeometry(0.6, 0.6, 0.5);
        const skirt = new THREE.Mesh(skirtGeo, bodyMat);
        skirt.position.y = 0.3;
        content.add(skirt);

        // 3. Head
        const headGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const headMat = new THREE.MeshStandardMaterial({ color: skinColor });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.5;
        content.add(head);

        // 4. Hair
        const hairMat = new THREE.MeshStandardMaterial({ color: hairColor });
        
        // Back Hair
        const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.5, 0.15), hairMat);
        hairBack.position.set(0, 1.5, -0.2);
        content.add(hairBack);

        // Side Hair
        const hairL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), hairMat);
        hairL.position.set(-0.2, 1.5, 0);
        content.add(hairL);
        
        const hairR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), hairMat);
        hairR.position.set(0.2, 1.5, 0);
        content.add(hairR);

        // 5. Hat
        const hatGroup = new THREE.Group();
        const hatMat = new THREE.MeshStandardMaterial({ color: hatColor });
        const bandMat = new THREE.MeshStandardMaterial({ color: hatBandColor });

        // Brim
        const brim = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.8), hatMat);
        brim.position.y = 1.7;
        hatGroup.add(brim);

        // Base
        const h1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.5), hatMat);
        h1.position.y = 1.9;
        hatGroup.add(h1);

        // Band
        const band = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.15, 0.45), bandMat);
        band.position.y = 2.1;
        hatGroup.add(band);

        // Cone steps
        const h2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.35), hatMat);
        h2.position.y = 2.3;
        hatGroup.add(h2);

        const h3 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.2), hatMat);
        h3.position.y = 2.6;
        hatGroup.add(h3);
        
        // Bent tip
        const h4 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.15), hatMat);
        h4.position.set(0.1, 2.8, 0); // Offset slightly
        h4.rotation.z = -0.2;
        hatGroup.add(h4);

        content.add(hatGroup);

        // 6. Arms
        const armGeo = new THREE.BoxGeometry(0.15, 0.5, 0.15);
        const armMat = new THREE.MeshStandardMaterial({ color: robeColor });
        
        const leftArm = new THREE.Mesh(armGeo, armMat);
        leftArm.position.set(-0.35, 1.0, 0);
        leftArm.rotation.z = 0; // Straight down
        content.add(leftArm);

        const rightArm = new THREE.Mesh(armGeo, armMat);
        rightArm.position.set(0.35, 1.0, 0);
        rightArm.rotation.z = 0; // Straight down
        content.add(rightArm);

        // Hands
        const handGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
        const handMat = new THREE.MeshStandardMaterial({ color: skinColor });
        
        const lHand = new THREE.Mesh(handGeo, handMat);
        lHand.position.set(0, -0.3, 0);
        leftArm.add(lHand);

        const rHand = new THREE.Mesh(handGeo, handMat);
        rHand.position.set(0, -0.3, 0);
        rightArm.add(rHand);

        // 7. Legs/Boots
        const legGeo = new THREE.BoxGeometry(0.15, 0.4, 0.15);
        const bootMat = new THREE.MeshStandardMaterial({ color: bootColor });
        
        const leftLeg = new THREE.Mesh(legGeo, bootMat);
        leftLeg.position.set(-0.15, 0.2, 0);
        content.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeo, bootMat);
        rightLeg.position.set(0.15, 0.2, 0);
        content.add(rightLeg);

        // Face Features
        const eyeGeo = new THREE.BoxGeometry(0.05, 0.05, 0.05);
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
        
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.1, 1.55, 0.18);
        content.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.1, 1.55, 0.18);
        content.add(rightEye);

        return { mesh, rightArm, leftArm, rightHand: rHand };
    }

    createWarlockMesh() {
        const mesh = new THREE.Group();
        const content = new THREE.Group();
        mesh.add(content);
        content.rotation.y = Math.PI;

        // Colors
        const skinColor = 0xffccaa;
        const robeColor = 0x222222; // Dark Grey/Black
        const trimColor = 0x00ff00; // Neon Green Trim
        const hoodColor = 0x111111; // Black Hood
        const bootColor = 0x000000;

        // 1. Body (Robe)
        const bodyGeo = new THREE.BoxGeometry(0.5, 0.8, 0.4);
        const bodyMat = new THREE.MeshStandardMaterial({ color: robeColor });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = 0.9;
        content.add(body);

        // 2. Skirt
        const skirtGeo = new THREE.BoxGeometry(0.6, 0.6, 0.5);
        const skirt = new THREE.Mesh(skirtGeo, bodyMat);
        skirt.position.y = 0.3;
        content.add(skirt);

        // 3. Head
        const headGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const headMat = new THREE.MeshStandardMaterial({ color: skinColor });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.5;
        content.add(head);

        // 4. Hood (Instead of Hat)
        const hoodMat = new THREE.MeshStandardMaterial({ color: hoodColor });
        
        // Top
        const hoodTop = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.1, 0.45), hoodMat);
        hoodTop.position.y = 1.7;
        content.add(hoodTop);

        // Back
        const hoodBack = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.4, 0.1), hoodMat);
        hoodBack.position.set(0, 1.5, -0.18);
        content.add(hoodBack);

        // Sides
        const hoodL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.45), hoodMat);
        hoodL.position.set(-0.18, 1.5, 0);
        content.add(hoodL);

        const hoodR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.45), hoodMat);
        hoodR.position.set(0.18, 1.5, 0);
        content.add(hoodR);

        // 5. Shoulders (Spikes?)
        const shoulderGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const trimMat = new THREE.MeshStandardMaterial({ color: trimColor, emissive: trimColor, emissiveIntensity: 0.5 });
        
        const sL = new THREE.Mesh(shoulderGeo, trimMat);
        sL.position.set(-0.35, 1.3, 0);
        content.add(sL);

        const sR = new THREE.Mesh(shoulderGeo, trimMat);
        sR.position.set(0.35, 1.3, 0);
        content.add(sR);

        // 6. Arms
        const armGeo = new THREE.BoxGeometry(0.15, 0.5, 0.15);
        const armMat = new THREE.MeshStandardMaterial({ color: robeColor });
        
        const leftArm = new THREE.Mesh(armGeo, armMat);
        leftArm.position.set(-0.35, 1.0, 0);
        leftArm.rotation.z = 0; // Straight down
        content.add(leftArm);

        const rightArm = new THREE.Mesh(armGeo, armMat);
        rightArm.position.set(0.35, 1.0, 0);
        rightArm.rotation.z = 0; // Straight down
        content.add(rightArm);

        // Hands
        const handGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
        const handMat = new THREE.MeshStandardMaterial({ color: skinColor });
        
        const lHand = new THREE.Mesh(handGeo, handMat);
        lHand.position.set(0, -0.3, 0);
        leftArm.add(lHand);

        const rHand = new THREE.Mesh(handGeo, handMat);
        rHand.position.set(0, -0.3, 0);
        rightArm.add(rHand);

        // 7. Legs
        const legGeo = new THREE.BoxGeometry(0.15, 0.4, 0.15);
        const bootMat = new THREE.MeshStandardMaterial({ color: bootColor });
        
        const leftLeg = new THREE.Mesh(legGeo, bootMat);
        leftLeg.position.set(-0.15, 0.2, 0);
        content.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeo, bootMat);
        rightLeg.position.set(0.15, 0.2, 0);
        content.add(rightLeg);

        // Face Features (Angry Eyes)
        const eyeGeo = new THREE.BoxGeometry(0.05, 0.02, 0.05);
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000 });
        
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.1, 1.55, 0.18);
        leftEye.rotation.z = 0.2; // Angry slant
        content.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.1, 1.55, 0.18);
        rightEye.rotation.z = -0.2; // Angry slant
        content.add(rightEye);

        return { mesh, rightArm, leftArm, rightHand: rHand };
    }

    checkCollision(position) {
        // Simple point collision for now
        // Check feet
        if (this.world.getBlock(Math.floor(position.x), Math.floor(position.y), Math.floor(position.z))) {
            return true;
        }
        // Check head
        if (this.world.getBlock(Math.floor(position.x), Math.floor(position.y + 1.5), Math.floor(position.z))) {
            return true;
        }
        return false;
    }

    onDeath() {
        this.isDead = true;
        if (this.soundManager && this.soundManager.playDeath) {
            this.soundManager.playDeath();
        }
        
        // Respawn logic
        setTimeout(() => {
            this.isDead = false;
            this.mesh.position.copy(this.spawnPoint);
            this.physicsPosition.copy(this.spawnPoint);
            this.velocity.set(0, 0, 0);
            this.health = 100;
            this.mana = 100;
            this.updateManaUI();
            if (this.networkManager) {
                this.networkManager.sendRespawn(this.spawnPoint);
            }
        }, 3000);
    }

    updateBuildMode(delta) {
        // Raycast from camera to find block
        // For now, let's assume we can just place a block in front of the player
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
        const target = this.camera.position.clone().add(forward.multiplyScalar(3));
        
        const bx = Math.floor(target.x);
        const by = Math.floor(target.y);
        const bz = Math.floor(target.z);
        
        this.ghostBlock.position.set(bx + 0.5, by + 0.5, bz + 0.5);
        
        if (this.input.isMouseButtonDown(0)) {
            if (performance.now() - this.lastBuildTime > this.buildCooldown * 1000) {
                this.world.addBlock(bx, by, bz, 0x555555); // Stone color
                this.lastBuildTime = performance.now();
                if (this.networkManager) {
                    this.networkManager.sendBlockUpdate(bx, by, bz, 1);
                }
            }
        } else if (this.input.isMouseButtonDown(2)) {
             if (performance.now() - this.lastBuildTime > this.buildCooldown * 1000) {
                this.world.removeBlock(bx, by, bz);
                this.lastBuildTime = performance.now();
                if (this.networkManager) {
                    this.networkManager.sendBlockUpdate(bx, by, bz, 0);
                }
            }
        }
    }
}
