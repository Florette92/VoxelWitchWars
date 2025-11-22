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
    }

    get position() {
        return this.physicsPosition;
    }

    update(delta, remotePlayers) {
        if (this.isDead) return;

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

        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation.y);

        const direction = new THREE.Vector3();
        if (this.input.isKeyDown('KeyW')) direction.add(forward);
        if (this.input.isKeyDown('KeyS')) direction.sub(forward);
        if (this.input.isKeyDown('KeyD')) direction.add(right);
        if (this.input.isKeyDown('KeyA')) direction.sub(right);

        if (direction.length() > 0) direction.normalize();

        // Movement
        const currentSpeed = this.isFlying ? this.flySpeed : this.speed;
        this.velocity.x = direction.x * currentSpeed;
        this.velocity.z = direction.z * currentSpeed;

        if (this.isFlying) {
            // Flight Vertical Movement
            if (this.input.isKeyDown('Space')) {
                this.velocity.y = this.flySpeed * 0.5;
            } else if (this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('KeyC')) {
                this.velocity.y = -this.flySpeed * 0.5;
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
        let robeColor = 0x2a0a4d;
        
        if (team === 'red') {
            robeColor = 0xff0000;
        } else if (team === 'blue') {
            robeColor = 0x0000ff;
        }

        this.bodyMat.color.setHex(robeColor);
    }

    updateOutfit() {
        const islandData = this.world.getIslandData(this.mesh.position.x, this.mesh.position.z);
        let newBiome = 'forest'; // Default
        
        if (islandData.isIsland) {
            newBiome = islandData.center.type;
        }

        if (this.currentBiome !== newBiome) {
            this.currentBiome = newBiome;
            
            let robeColor = 0x2a0a4d;
            let hatColor = 0x111111;

            switch (newBiome) {
                case 'ice':
                    robeColor = 0x88ccff; // Light Blue
                    hatColor = 0x003366; // Dark Blue
                    break;
                case 'arcane':
                    robeColor = 0x4B0082; // Indigo
                    hatColor = 0xFFD700; // Gold
                    break;
                case 'volcanic':
                    robeColor = 0x800000; // Maroon
                    hatColor = 0x222222; // Dark Grey
                    break;
                case 'forest':
                default:
                    robeColor = 0x2a0a4d; // Dark Purple
                    hatColor = 0x111111; // Black
                    break;
            }

            this.bodyMat.color.setHex(robeColor);
            this.hatMat.color.setHex(hatColor);
        }
    }

    createWand() {
        const wandGroup = new THREE.Group();

        // Shaft
        const shaftGeo = new THREE.BoxGeometry(0.04, 1.2, 0.04);
        const shaftMat = new THREE.MeshStandardMaterial({ color: 0x4a3c31 });
        const shaft = new THREE.Mesh(shaftGeo, shaftMat);
        shaft.position.y = 0;
        wandGroup.add(shaft);

        // Gems (Blue glowing bits)
        const gemGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
        const gemMat = new THREE.MeshStandardMaterial({ 
            color: 0x00ffff, 
            emissive: 0x00ffff,
            emissiveIntensity: 0.5
        });
        
        for(let i=0; i<3; i++) {
            const gem = new THREE.Mesh(gemGeo, gemMat);
            gem.position.y = -0.2 + (i * 0.25);
            wandGroup.add(gem);
        }

        // Head (Purple Crystal)
        const crystalGeo = new THREE.DodecahedronGeometry(0.12);
        const crystalMat = new THREE.MeshStandardMaterial({ 
            color: 0x9933ff,
            emissive: 0x5500aa,
            emissiveIntensity: 0.8,
            transparent: true,
            opacity: 0.9
        });
        const crystal = new THREE.Mesh(crystalGeo, crystalMat);
        crystal.position.y = 0.7;
        wandGroup.add(crystal);

        // Particles (Simple orbiting points)
        const particleCount = 20;
        const particleGeo = new THREE.BufferGeometry();
        const particlePos = [];
        for(let i=0; i<particleCount; i++) {
            particlePos.push((Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5);
        }
        particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particlePos, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0xffdd44,
            size: 0.05,
            transparent: true,
            opacity: 0.6
        });
        this.wandParticles = new THREE.Points(particleGeo, particleMat);
        this.wandParticles.position.y = 0.7;
        wandGroup.add(this.wandParticles);

        // Tip Marker (Invisible, for spawning projectiles)
        this.wandTip = new THREE.Object3D();
        this.wandTip.position.y = 0.9; // Slightly above crystal
        wandGroup.add(this.wandTip);

        return wandGroup;
    }

    createBroom() {
        const broomGroup = new THREE.Group();
        
        // Handle
        const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.5, 8);
        const handleMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
        const handle = new THREE.Mesh(handleGeo, handleMat);
        handle.rotation.x = Math.PI / 2; // Horizontal along Z
        broomGroup.add(handle);

        // Bristles (Tail)
        const bristleGeo = new THREE.ConeGeometry(0.2, 0.8, 16);
        const bristleMat = new THREE.MeshStandardMaterial({ color: 0xeebb55 });
        const bristles = new THREE.Mesh(bristleGeo, bristleMat);
        bristles.rotation.x = -Math.PI / 2; // Pointing back
        bristles.position.z = 1.4; // Behind player
        broomGroup.add(bristles);

        // Detail Ring
        const ringGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.1, 8);
        const ringMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.z = 1.0;
        broomGroup.add(ring);

        // Position relative to player center
        // Lower it to "sit" on it (y=0.3)
        // Tilt slightly up at the front (rotate X negative)
        broomGroup.position.set(0, 0.3, 0);
        broomGroup.rotation.x = -0.1; 
        
        return broomGroup;
    }

    shoot() {
        // Get spawn position (Wand Tip)
        const spawnPos = new THREE.Vector3();
        this.wandTip.getWorldPosition(spawnPos);

        // Calculate Target Point (Where the crosshair is aiming)
        // Raycast from camera center (0, 0)
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        
        // Raycast against the world to find what we are looking at
        // Optimized: Use Voxel Raycast instead of Mesh Raycast
        const hit = this.world.raycast(raycaster.ray.origin, raycaster.ray.direction, 100);
        
        const targetPoint = new THREE.Vector3();
        
        if (hit) {
            // Aim at the hit point
            targetPoint.copy(hit.point);
        } else {
            // Aim at a point far away
            raycaster.ray.at(100, targetPoint);
        }

        // Calculate direction from Wand to Target
        const direction = new THREE.Vector3().subVectors(targetPoint, spawnPos).normalize();

        // Create projectile
        const projectile = new Projectile(this.scene, spawnPos, direction, this.particleSystem, this.soundManager);
        
        // Callback for hitting a player
        projectile.onPlayerHitCallback = (targetId, damage) => {
            if (this.networkManager) {
                this.networkManager.sendHit(targetId, damage);
            }
        };

        this.projectiles.push(projectile);
        
        if (this.soundManager) this.soundManager.playShoot();
    }

    onDeath() {
        if (this.isDead) return;
        this.isDead = true;
        
        // Unlock pointer
        document.exitPointerLock();
        
        // Show Menu
        const menu = document.getElementById('respawn-menu');
        menu.style.display = 'block';
        
        const btn = document.getElementById('respawn-btn');
        btn.onclick = () => {
            this.respawn();
            menu.style.display = 'none';
            document.body.requestPointerLock();
        };
    }

    respawn() {
        const spawn = this.spawnPoint.clone();
        this.physicsPosition.copy(spawn);
        this.mesh.position.copy(spawn);
        this.velocity.set(0, 0, 0);
        this.isDead = false;
    }

    setSpawnPoint(point) {
        this.spawnPoint.copy(point);
    }

    checkCollision(pos) {
        const r = 0.4; // Radius
        const h = 1.8; // Height
        
        // Check multiple points to prevent clipping
        // Center
        if (this.world.getBlock(pos.x, pos.y, pos.z)) return true;
        if (this.world.getBlock(pos.x, pos.y + 1, pos.z)) return true;
        if (this.world.getBlock(pos.x, pos.y + h, pos.z)) return true;
        
        // Check corners
        const offsets = [
            [r, 0, r], [r, 0, -r], [-r, 0, r], [-r, 0, -r],
            [r, h, r], [r, h, -r], [-r, h, r], [-r, h, -r],
            [r, h/2, r], [r, h/2, -r], [-r, h/2, r], [-r, h/2, -r]
        ];
        
        for (let o of offsets) {
            if (this.world.getBlock(pos.x + o[0], pos.y + o[1], pos.z + o[2])) return true;
        }
        
        return false;
    }

    updateBuildMode(delta) {
        // Raycast from center of screen
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        
        // Use Voxel Raycast
        const hit = this.world.raycast(raycaster.ray.origin, raycaster.ray.direction, 8);
        
        if (hit) {
            const p = hit.point;
            const n = hit.normal;
            
            // Calculate block position
            // hit.block is the block we hit
            const bx = hit.block.x;
            const by = hit.block.y;
            const bz = hit.block.z;

            // Adjacent (placement) coordinate
            const ax = bx + n.x;
            const ay = by + n.y;
            const az = bz + n.z;

            // Update Ghost Block
            this.ghostBlock.position.set(ax + 0.5, ay + 0.5, az + 0.5);
            this.ghostBlock.visible = true;

            // Handle Input
            this.lastBuildTime += delta;
            if (this.lastBuildTime >= this.buildCooldown) {
                // Left Click: Destroy
                if (this.input.isMouseButtonDown(0)) {
                    this.world.removeBlock(bx, by, bz);
                    if (this.soundManager) this.soundManager.playExplosion();
                    if (this.particleSystem) {
                        this.particleSystem.emit(new THREE.Vector3(bx+0.5, by+0.5, bz+0.5), 0x888888, 10);
                    }
                    this.lastBuildTime = 0;
                }
                // Right Click: Place
                else if (this.input.isMouseButtonDown(2)) {
                    // Don't place inside player
                    const playerPos = this.physicsPosition;
                    const dist = new THREE.Vector3(ax+0.5, ay+0.5, az+0.5).distanceTo(playerPos);
                    
                    if (dist > 1.5) {
                        this.world.addBlock(ax, ay, az, 0x885522); // Wood color default
                        if (this.soundManager) this.soundManager.playBuild();
                        this.lastBuildTime = 0;
                    }
                }
            }
        } else {
            this.ghostBlock.visible = false;
        }
    }
}
