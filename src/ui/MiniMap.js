export class MiniMap {
    constructor(world, player) {
        this.world = world;
        this.player = player;
        this.canvas = document.getElementById('minimap');
        this.ctx = this.canvas.getContext('2d');
        this.size = 200; // Canvas size
        this.zoom = 1.5; // World units per pixel (higher = zoomed out)
        
        this.visited = new Set();
        this.cellSize = 4; // Resolution of fog discovery (in world units)
    }

    update() {
        // 1. Update visited cells based on player position
        const px = this.player.position.x;
        const pz = this.player.position.z;
        const range = 60; // Discovery radius
        
        for (let x = px - range; x <= px + range; x += this.cellSize) {
            for (let z = pz - range; z <= pz + range; z += this.cellSize) {
                const dx = x - px;
                const dz = z - pz;
                if (dx*dx + dz*dz <= range*range) {
                    const cx = Math.floor(x / this.cellSize);
                    const cz = Math.floor(z / this.cellSize);
                    this.visited.add(`${cx},${cz}`);
                }
            }
        }

        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.size, this.size);
        
        // Save context
        this.ctx.save();
        
        // Clip to circle
        this.ctx.beginPath();
        this.ctx.arc(this.size/2, this.size/2, this.size/2, 0, Math.PI * 2);
        this.ctx.clip();
        
        // Fill Background (Fog)
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.size, this.size);

        const px = this.player.position.x;
        const pz = this.player.position.z;
        
        // Iterate over visible area on the minimap
        const viewRange = (this.size * this.zoom) / 2;
        
        const startX = Math.floor((px - viewRange) / this.cellSize) * this.cellSize;
        const endX = Math.floor((px + viewRange) / this.cellSize) * this.cellSize;
        const startZ = Math.floor((pz - viewRange) / this.cellSize) * this.cellSize;
        const endZ = Math.floor((pz + viewRange) / this.cellSize) * this.cellSize;

        for (let x = startX; x <= endX; x += this.cellSize) {
            for (let z = startZ; z <= endZ; z += this.cellSize) {
                const cx = Math.floor(x / this.cellSize);
                const cz = Math.floor(z / this.cellSize);
                
                if (this.visited.has(`${cx},${cz}`)) {
                    // Get color from world
                    const color = this.world.getMapColor(x, z);
                    
                    const screenX = (this.size / 2) + (x - px) / this.zoom;
                    const screenZ = (this.size / 2) + (z - pz) / this.zoom;
                    
                    const pixelSize = (this.cellSize / this.zoom) + 1;
                    
                    this.ctx.fillStyle = color;
                    this.ctx.fillRect(screenX, screenZ, pixelSize, pixelSize);
                }
            }
        }
        
        // Draw Player Icon
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(this.size/2, this.size/2, 4, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        // Draw Player Direction
        const dirX = Math.sin(this.player.rotation.y);
        const dirZ = Math.cos(this.player.rotation.y);
        
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.size/2, this.size/2);
        // Forward is -Z in 3D, which is Up (-Y) in 2D map if North is Up.
        // If we want the map to rotate with the player, that's different.
        // Here the map is North-Up (Fixed orientation), player rotates.
        // Player rotation Y: 0 = -Z (North).
        // Canvas: -Y is Up.
        // So rotation 0 should point to -Y.
        // sin(0)=0, cos(0)=1.
        // lineTo(x - 0, y - 10). Correct.
        this.ctx.lineTo(this.size/2 - dirX * 10, this.size/2 - dirZ * 10); 
        this.ctx.stroke();

        this.ctx.restore();
    }
}