import * as THREE from 'three';

export class RemotePlayer {
    constructor(scene, data) {
        this.scene = scene;
        this.id = data.id;
        this.team = data.team;
        this.characterClass = data.characterClass || 'witch';
        
        // Mesh Group
        const charData = this.characterClass === 'warlock' ? this.createWarlockMesh() : this.createWitchMesh();
        this.mesh = charData.mesh;
        this.mesh.position.set(data.x, data.y, data.z);
        
        // Name Tag
        const name = data.name || "Unknown";
        const nameSprite = this.createNameSprite(name);
        nameSprite.position.y = 3.0;
        this.mesh.add(nameSprite);

        this.scene.add(this.mesh);

        // Interpolation targets
        this.targetPos = new THREE.Vector3(data.x, data.y, data.z);
        this.targetRot = new THREE.Euler(data.rx, data.ry, 0);
    }

    createNameSprite(name) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fontSize = 24;
        const font = `bold ${fontSize}px Arial`;
        
        context.font = font;
        const textWidth = context.measureText(name).width;
        
        canvas.width = textWidth + 20;
        canvas.height = fontSize + 10;
        
        // Background (optional, semi-transparent black)
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Text
        context.font = font;
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(name, canvas.width / 2, canvas.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(material);
        
        // Scale sprite to match text size
        const scale = 0.05;
        sprite.scale.set(canvas.width * scale, canvas.height * scale, 1);
        
        return sprite;
    }

    update(delta) {
        this.mesh.position.lerp(this.targetPos, delta * 10);
        // Simple rotation lerp
        this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.targetRot.y, delta * 10);
    }

    updateData(data) {
        this.targetPos.set(data.x, data.y, data.z);
        this.targetRot.set(data.rx, data.ry, 0);
    }

    setCarrying(color) {
        if (this.flagMesh) {
            this.mesh.remove(this.flagMesh);
            this.flagMesh = null;
        }
        
        if (color) {
            const geo = new THREE.OctahedronGeometry(0.4, 0);
            const mat = new THREE.MeshStandardMaterial({ 
                color: color, 
                emissive: color,
                emissiveIntensity: 1
            });
            this.flagMesh = new THREE.Mesh(geo, mat);
            this.flagMesh.position.set(0, 2.5, -0.5); // Above/behind head
            this.mesh.add(this.flagMesh);
        }
    }

    dispose() {
        this.scene.remove(this.mesh);
    }

    createWitchMesh() {
        const mesh = new THREE.Group();
        const content = new THREE.Group();
        mesh.add(content);
        
        // Rotate 180 degrees so face points to -Z (Forward)
        content.rotation.y = Math.PI;

        // Colors
        const skinColor = 0xffccaa;
        let robeColor = 0x4b0082; // Default Indigo/Purple
        if (this.team === 'red') robeColor = 0xff0000;
        else if (this.team === 'blue') robeColor = 0x0000ff;

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

        // Colors based on reference image
        const skinColor = 0xffccaa;
        let robeColor = 0x4b0082; // Indigo/Purple
        if (this.team === 'red') robeColor = 0x880000;
        else if (this.team === 'blue') robeColor = 0x000088;

        const hatColor = robeColor; // Match robe
        const hatBandColor = 0xff0000; // Red Band
        const hairColor = 0x000000; // Black Hair
        const bootColor = 0x000000; // Black Boots
        const broomStickColor = 0x8B4513; // SaddleBrown
        const broomBristleColor = 0xFFD700; // Gold/Yellow

        // --- BROOM ---
        const broomGroup = new THREE.Group();
        
        // Stick
        const stickGeo = new THREE.BoxGeometry(0.1, 0.1, 2.0);
        const stickMat = new THREE.MeshStandardMaterial({ color: broomStickColor });
        const stick = new THREE.Mesh(stickGeo, stickMat);
        stick.position.set(0, 0.6, 0.2); // Positioned under the character
        stick.rotation.x = -0.1; // Slight tilt up
        broomGroup.add(stick);

        // Bristles
        const bristleGeo = new THREE.BoxGeometry(0.3, 0.3, 0.6);
        const bristleMat = new THREE.MeshStandardMaterial({ color: broomBristleColor });
        const bristles = new THREE.Mesh(bristleGeo, bristleMat);
        bristles.position.set(0, 0.7, -0.8); // Back of the stick
        bristles.rotation.x = -0.1;
        broomGroup.add(bristles);

        content.add(broomGroup);

        // --- BODY ---
        // 1. Torso (Robe)
        const bodyGeo = new THREE.BoxGeometry(0.45, 0.7, 0.35);
        const bodyMat = new THREE.MeshStandardMaterial({ color: robeColor });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = 1.0; // Sitting on broom
        content.add(body);

        // 2. Skirt/Robe Bottom (Sitting drape)
        const skirtGeo = new THREE.BoxGeometry(0.5, 0.4, 0.5);
        const skirt = new THREE.Mesh(skirtGeo, bodyMat);
        skirt.position.y = 0.7;
        content.add(skirt);

        // --- HEAD ---
        // 3. Head
        const headGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const headMat = new THREE.MeshStandardMaterial({ color: skinColor });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.55;
        content.add(head);

        // Nose
        const noseGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
        const nose = new THREE.Mesh(noseGeo, headMat);
        nose.position.set(0, 1.5, 0.2);
        content.add(nose);

        // --- HAIR ---
        const hairMat = new THREE.MeshStandardMaterial({ color: hairColor });
        
        // Back Hair
        const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.15), hairMat);
        hairBack.position.set(0, 1.5, -0.2);
        content.add(hairBack);

        // Side Hair
        const hairL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), hairMat);
        hairL.position.set(-0.2, 1.5, 0);
        content.add(hairL);
        
        const hairR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), hairMat);
        hairR.position.set(0.2, 1.5, 0);
        content.add(hairR);

        // --- HAT ---
        const hatGroup = new THREE.Group();
        const hatMat = new THREE.MeshStandardMaterial({ color: hatColor });
        const bandMat = new THREE.MeshStandardMaterial({ color: hatBandColor });

        // Brim
        const brim = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.7), hatMat);
        brim.position.y = 1.75;
        hatGroup.add(brim);

        // Band
        const band = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.4), bandMat);
        band.position.y = 1.82;
        hatGroup.add(band);

        // Cone steps (Pointed Hat)
        const h1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.25, 0.35), hatMat);
        h1.position.y = 2.0;
        hatGroup.add(h1);

        const h2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), hatMat);
        h2.position.y = 2.25;
        hatGroup.add(h2);

        const h3 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.15), hatMat);
        h3.position.y = 2.5;
        hatGroup.add(h3);
        
        // Bent tip
        const h4 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.1), hatMat);
        h4.position.set(0.05, 2.7, -0.05); 
        h4.rotation.z = -0.2;
        h4.rotation.x = -0.2;
        hatGroup.add(h4);

        content.add(hatGroup);

        // --- ARMS ---
        const armGeo = new THREE.BoxGeometry(0.12, 0.45, 0.12);
        const armMat = new THREE.MeshStandardMaterial({ color: robeColor });
        
        // Left Arm (Reaching for broom)
        const leftArm = new THREE.Mesh(armGeo, armMat);
        leftArm.position.set(-0.3, 1.1, 0.1);
        leftArm.rotation.z = -0.2;
        leftArm.rotation.x = -0.5;
        content.add(leftArm);

        // Right Arm (Reaching for broom)
        const rightArm = new THREE.Mesh(armGeo, armMat);
        rightArm.position.set(0.3, 1.1, 0.1);
        rightArm.rotation.z = 0.2;
        rightArm.rotation.x = -0.5;
        content.add(rightArm);

        // Hands
        const handGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const handMat = new THREE.MeshStandardMaterial({ color: skinColor });
        
        const lHand = new THREE.Mesh(handGeo, handMat);
        lHand.position.set(0, -0.25, 0);
        leftArm.add(lHand);

        const rHand = new THREE.Mesh(handGeo, handMat);
        rHand.position.set(0, -0.25, 0);
        rightArm.add(rHand);

        // --- LEGS ---
        // Sitting pose: Thighs forward, calves down/back
        const legGeo = new THREE.BoxGeometry(0.13, 0.35, 0.13);
        const legMat = new THREE.MeshStandardMaterial({ color: robeColor }); 
        const bootMat = new THREE.MeshStandardMaterial({ color: bootColor });
        
        // Left Leg
        const leftThigh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.35, 0.14), legMat);
        leftThigh.position.set(-0.2, 0.8, 0.1);
        leftThigh.rotation.x = -1.0; // Sitting
        leftThigh.rotation.z = 0.2; // Splayed
        content.add(leftThigh);

        const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.12), bootMat);
        leftBoot.position.set(0, -0.25, 0.1);
        leftBoot.rotation.x = 1.0; // Knee bend
        leftThigh.add(leftBoot);

        // Right Leg
        const rightThigh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.35, 0.14), legMat);
        rightThigh.position.set(0.2, 0.8, 0.1);
        rightThigh.rotation.x = -1.0; // Sitting
        rightThigh.rotation.z = -0.2; // Splayed
        content.add(rightThigh);

        const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.12), bootMat);
        rightBoot.position.set(0, -0.25, 0.1);
        rightBoot.rotation.x = 1.0; // Knee bend
        rightThigh.add(rightBoot);

        // Face Features
        const eyeGeo = new THREE.BoxGeometry(0.04, 0.04, 0.04);
        const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
        
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.08, 1.55, 0.18);
        content.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.08, 1.55, 0.18);
        content.add(rightEye);

        return { mesh, rightArm, leftArm, rightHand: rHand };
    }
}
