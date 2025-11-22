import * as THREE from 'three';
import { VoxelWorld } from './world/VoxelWorld.js';
import { Player } from './gameplay/Player.js';
import { MiniMap } from './ui/MiniMap.js';
import { ParticleSystem } from './core/ParticleSystem.js';
import { SoundManager } from './core/SoundManager.js';
import { NetworkManager } from './core/NetworkManager.js';
import { RemotePlayer } from './gameplay/RemotePlayer.js';

// Setup Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Sky blue
scene.fog = new THREE.Fog(0x87CEEB, 10, 500); // Increased fog distance for skybox

// Setup Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Setup Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Systems
const particleSystem = new ParticleSystem(scene);
const soundManager = new SoundManager();
const networkManager = new NetworkManager();

// Multiplayer State
const remotePlayers = new Map();
const crystalMeshes = new Map();

// Network Callbacks
networkManager.onLocalPlayerInit = (data) => {
    console.log("Connected as:", data.id);
    // Do nothing here, wait for team selection
};

networkManager.onTeamAssignedCallback = (data) => {
    console.log("Team Assigned Callback received:", data);
    console.log("Team:", data.team);
    player.setTeam(data.team);
    
    // Auto-spawn based on team
    let spawn = new THREE.Vector3(150, 32, 150); // Default
    
    if (data.team === 'blue') {
        spawn.set(-150, 32, 150); // Ice
    } else if (data.team === 'red') {
        spawn.set(-150, 32, -150); // Volcanic
    }

    console.log("Spawning at:", spawn);
    player.mesh.position.copy(spawn);
    player.physicsPosition.copy(spawn);
    player.velocity.set(0, 0, 0);
    player.setSpawnPoint(spawn);
    
    // Hide menu and start game
    const startMenu = document.getElementById('start-menu');
    const ui = document.getElementById('ui');
    const scoreUI = document.getElementById('score-ui');
    
    console.log("Hiding start menu, showing UI");
    startMenu.style.display = 'none';
    ui.style.display = 'block';
    scoreUI.style.display = 'block';
    gameStarted = true;
    
    // Lock cursor
    document.body.requestPointerLock();
    
    // Init Audio
    soundManager.initWind();
};

networkManager.onHealthUpdate = (health) => {
    const healthBar = document.getElementById('health-bar');
    const healthText = document.getElementById('health-text');
    if (healthBar && healthText) {
        healthBar.style.width = `${health}%`;
        healthText.textContent = `${Math.ceil(health)} / 100`;
        
        // Color change based on health
        if (health > 50) healthBar.style.background = '#00ff00';
        else if (health > 25) healthBar.style.background = '#ffff00';
        else healthBar.style.background = '#ff0000';
    }
};

networkManager.onPlayerDied = () => {
    console.log("You Died!");
    player.onDeath();
    
    // Show respawn menu
    document.getElementById('respawn-menu').style.display = 'flex';
};

// Respawn Button Logic
const respawnBtn = document.getElementById('respawn-btn');
if (respawnBtn) {
    respawnBtn.addEventListener('click', () => {
        // Hide menu
        document.getElementById('respawn-menu').style.display = 'none';
        
        // Reset Player State locally (position will be synced by teamAssigned)
        player.isDead = false;
        player.health = 100;
        
        // Lock cursor again
        document.body.requestPointerLock();
    });
}

// Team Selection UI Logic
document.querySelectorAll('.team-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const team = e.currentTarget.dataset.team;
        console.log("Team selected:", team);
        document.getElementById('team-select').style.display = 'none';
        document.getElementById('loading-msg').style.display = 'block';
        networkManager.joinTeam(team);
    });
});

networkManager.onPlayerJoinedCallback = (data) => {
    console.log("Player Joined:", data.id);
    const rp = new RemotePlayer(scene, data);
    remotePlayers.set(data.id, rp);
};

networkManager.onPlayerLeftCallback = (id) => {
    console.log("Player Left:", id);
    if (remotePlayers.has(id)) {
        remotePlayers.get(id).dispose();
        remotePlayers.delete(id);
    }
};

networkManager.onPlayerMovedCallback = (data) => {
    if (remotePlayers.has(data.id)) {
        remotePlayers.get(data.id).updateData(data);
    }
};

networkManager.onCrystalsInit = (crystals) => {
    // Clear existing
    crystalMeshes.forEach(mesh => scene.remove(mesh));
    crystalMeshes.clear();

    const geo = new THREE.OctahedronGeometry(1, 0);
    const mat = new THREE.MeshStandardMaterial({ 
        color: 0x800080, 
        emissive: 0x400040,
        emissiveIntensity: 2
    });

    crystals.forEach(c => {
        if (c.active) {
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(c.x, c.y, c.z);
            
            // Add light
            const light = new THREE.PointLight(0x800080, 2, 20);
            mesh.add(light);
            
            scene.add(mesh);
            crystalMeshes.set(c.id, mesh);
        }
    });
};

networkManager.onCrystalCollectedCallback = (data) => {
    if (crystalMeshes.has(data.id)) {
        const mesh = crystalMeshes.get(data.id);
        scene.remove(mesh);
        crystalMeshes.delete(data.id);
        
        // Particle effect
        particleSystem.emit(mesh.position, 0x800080, 30);
        soundManager.playExplosion(); // Reuse explosion sound for now
    }
    updateScoreUI(data.scores);
};

networkManager.onScoreUpdate = (scores) => {
    updateScoreUI(scores);
};

function updateScoreUI(scores) {
    const scoreDiv = document.getElementById('score-ui');
    if (scoreDiv) {
        scoreDiv.innerHTML = `
            <span style="color: #ff4444">Red: ${scores.red}</span> | 
            <span style="color: #4444ff">Blue: ${scores.blue}</span>
        `;
    }
}

// Skybox
const skyGeo = new THREE.SphereGeometry(500, 32, 32);
const skyMat = new THREE.ShaderMaterial({
    uniforms: {
        topColor: { value: new THREE.Color(0x0077ff) },
        bottomColor: { value: new THREE.Color(0xffffff) },
        offset: { value: 33 },
        exponent: { value: 0.6 }
    },
    vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
    fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize( vWorldPosition + offset ).y;
            gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
        }
    `,
    side: THREE.BackSide
});
const sky = new THREE.Mesh(skyGeo, skyMat);
scene.add(sky);

// Lights
const ambientLight = new THREE.AmbientLight(0xcccccc, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(20, 50, 20);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

// World
const world = new VoxelWorld({
    chunkSize: 32,
    tileSize: 1
});
scene.add(world.mesh);

// Player
const spawnPos = world.findSpawnPoint();
const player = new Player(scene, camera, world, spawnPos, particleSystem, soundManager, networkManager);

// Lobby Logic
const lobbyMenu = document.getElementById('lobby-menu');
const lobbyStatus = document.getElementById('lobby-status');
const btnHost = document.getElementById('btn-host');
const btnJoin = document.getElementById('btn-join');
const inputHostId = document.getElementById('input-host-id');
const inputCustomHostId = document.getElementById('input-custom-host-id');
const inputPlayerName = document.getElementById('input-player-name');

// Waiting Room Elements
const waitingRoom = document.getElementById('waiting-room');
const mainMenuButtons = document.getElementById('main-menu-buttons');
const playerList = document.getElementById('player-list');
const startGameBtn = document.getElementById('start-game-btn');
const waitingMsg = document.getElementById('waiting-msg');
const lobbyNameDisplay = document.getElementById('lobby-name-display');

// Network Callbacks for Lobby
networkManager.onPlayerListUpdate = (players) => {
    playerList.innerHTML = '';
    players.forEach(p => {
        const li = document.createElement('li');
        const isMe = p.id === networkManager.playerId;
        li.textContent = `${p.name} ${isMe ? "(You)" : ""}`;
        li.style.padding = "5px";
        li.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        if (isMe) li.style.fontWeight = "bold";
        playerList.appendChild(li);
    });
};

networkManager.onGameStarted = () => {
    console.log("Game Started!");
    lobbyMenu.style.display = 'none';
    startMenu.style.display = 'flex';
};

if (btnHost) {
    btnHost.addEventListener('click', async () => {
        const customId = inputCustomHostId.value.trim() || null;
        const playerName = inputPlayerName.value.trim() || "Host";
        
        lobbyStatus.textContent = "Initializing Host...";
        try {
            const id = await networkManager.hostGame(customId, playerName);
            lobbyStatus.textContent = ""; // Clear status
            
            // Show Waiting Room
            mainMenuButtons.style.display = 'none';
            waitingRoom.style.display = 'flex';
            startGameBtn.style.display = 'block';
            waitingMsg.style.display = 'none';
            lobbyNameDisplay.textContent = id;
            
            // Copy to clipboard
            navigator.clipboard.writeText(id);
            
        } catch (err) {
            lobbyStatus.textContent = "Error: " + err;
        }
    });
}

if (startGameBtn) {
    startGameBtn.addEventListener('click', () => {
        if (networkManager.gameHost) {
            networkManager.gameHost.startGame();
        }
    });
}

if (btnJoin) {
    btnJoin.addEventListener('click', async () => {
        const id = inputHostId.value.trim();
        const playerName = inputPlayerName.value.trim() || "Player";

        if (!id) {
            lobbyStatus.textContent = "Please enter a Host ID";
            return;
        }
        
        lobbyStatus.textContent = "Connecting...";
        try {
            await networkManager.joinGame(id, playerName);
            lobbyStatus.textContent = "";
            
            // Show Waiting Room
            mainMenuButtons.style.display = 'none';
            waitingRoom.style.display = 'flex';
            startGameBtn.style.display = 'none';
            waitingMsg.style.display = 'block';
            lobbyNameDisplay.textContent = id;
            
        } catch (err) {
            lobbyStatus.textContent = "Error: " + err;
        }
    });
}

// Start Menu Logic
const startMenu = document.getElementById('start-menu');
const ui = document.getElementById('ui');
let gameStarted = false;

// Add Score UI
const scoreUI = document.createElement('div');
scoreUI.id = 'score-ui';
scoreUI.style.position = 'absolute';
scoreUI.style.top = '20px';
scoreUI.style.left = '50%';
scoreUI.style.transform = 'translateX(-50%)';
scoreUI.style.color = 'white';
scoreUI.style.fontSize = '24px';
scoreUI.style.fontWeight = 'bold';
scoreUI.style.textShadow = '2px 2px 4px #000';
scoreUI.style.display = 'none';
document.body.appendChild(scoreUI);

// Remove old listener if it exists (it was replaced above, but just to be safe regarding the old button code)
// The previous replace_string_in_file removed the onLocalPlayerInit block which contained the logic.
// Now we need to remove the old button listener for 'btn-join' which is no longer in the HTML.

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Game Loop
const clock = new THREE.Clock();
let minimap;

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    
    if (gameStarted) {
        if (!minimap) minimap = new MiniMap(world, player);
        player.update(delta, remotePlayers);
        world.update(player.position);
        minimap.update();
        particleSystem.update(delta);
        
        // Update Remote Players
        remotePlayers.forEach(rp => rp.update(delta));

        // Animate Crystals
        crystalMeshes.forEach(mesh => {
            mesh.rotation.y += delta;
            mesh.position.y += Math.sin(clock.getElapsedTime() * 2) * 0.01;
        });

        // Check Crystal Collection
        crystalMeshes.forEach((mesh, id) => {
            if (player.position.distanceTo(mesh.position) < 2) {
                networkManager.collectCrystal(id);
            }
        });
        
        // Update wind sound based on speed/height
        const speed = player.velocity.length();
        soundManager.updateWind(speed);
    } else {
        // Optional: Rotate camera around the world or something for a nice intro
    }

    renderer.render(scene, camera);
}

animate();
