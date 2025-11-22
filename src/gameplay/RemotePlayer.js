import * as THREE from 'three';

export class RemotePlayer {
    constructor(scene, data) {
        this.scene = scene;
        this.id = data.id;
        this.team = data.team;
        
        // Mesh Group
        this.mesh = new THREE.Group();
        this.mesh.position.set(data.x, data.y, data.z);
        
        // Body (Robe)
        const bodyGeo = new THREE.ConeGeometry(0.5, 1.5, 8);
        let color = 0x2a0a4d;
        if (this.team === 'red') color = 0xff0000;
        else if (this.team === 'blue') color = 0x0000ff;

        this.bodyMat = new THREE.MeshStandardMaterial({ color: color }); 
        const body = new THREE.Mesh(bodyGeo, this.bodyMat);
        body.position.y = 0.75;
        this.mesh.add(body);

        // Head
        const headGeo = new THREE.SphereGeometry(0.3, 8, 8);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffccaa });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.6;
        this.mesh.add(head);

        // Hat
        const hatConeGeo = new THREE.ConeGeometry(0.3, 0.8, 8);
        const hatMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
        const hatCone = new THREE.Mesh(hatConeGeo, hatMat);
        hatCone.position.y = 2.2;
        hatCone.rotation.x = -0.2;
        this.mesh.add(hatCone);

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

    dispose() {
        this.scene.remove(this.mesh);
    }
}
