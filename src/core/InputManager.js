export class InputManager {
    constructor() {
        this.keys = {};
        this.mouseButtons = {};
        this.mouse = { x: 0, y: 0, movementX: 0, movementY: 0 };
        this.isLocked = false;

        window.addEventListener('keydown', (e) => this.keys[e.code] = true);
        window.addEventListener('keyup', (e) => this.keys[e.code] = false);
        
        document.addEventListener('mousedown', (e) => {
            if (this.isLocked) this.mouseButtons[e.button] = true;
        });
        document.addEventListener('mouseup', (e) => this.mouseButtons[e.button] = false);

        document.addEventListener('mousemove', (e) => {
            if (this.isLocked) {
                this.mouse.movementX = e.movementX;
                this.mouse.movementY = e.movementY;
            }
        });

        document.addEventListener('click', (e) => {
            if (!this.isLocked && e.target.tagName === 'CANVAS') {
                document.body.requestPointerLock();
            }
        });

        document.addEventListener('pointerlockchange', () => {
            this.isLocked = document.pointerLockElement === document.body;
        });

        // Prevent context menu on right click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    }

    isKeyDown(code) {
        return !!this.keys[code];
    }

    isMouseButtonDown(button) {
        return !!this.mouseButtons[button];
    }

    getMouseMovement() {
        const move = { x: this.mouse.movementX, y: this.mouse.movementY };
        this.mouse.movementX = 0;
        this.mouse.movementY = 0;
        return move;
    }
}
