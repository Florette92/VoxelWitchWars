import * as THREE from 'three';
import { VoxelWorld } from './world/VoxelWorld.js';
import { Player } from './gameplay/Player.js';
import { MiniMap } from './ui/MiniMap.js';
import { ParticleSystem } from './core/ParticleSystem.js';
import { SoundManager } from './core/SoundManager.js';
import { NetworkManager } from './core/NetworkManager.js';
import { RemotePlayer } from './gameplay/RemotePlayer.js';

// --- UI SETUP (Run immediately) ---
console.log("Voxel Witch Wars v1.1 Loaded");
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const lobbyMenu = document.getElementById('lobby-menu');
const gamemodeMenu = document.getElementById('gamemode-menu');
const campaignMenu = document.getElementById('campaign-menu');

if (startBtn && startScreen) {
    startBtn.addEventListener('click', () => {
        console.log('Start button clicked');
        startScreen.style.display = 'none';
        if (gamemodeMenu) {
            gamemodeMenu.classList.remove('hidden');
            gamemodeMenu.style.display = 'flex';
        }
    });
}

// Game Mode Menu Listeners
const btnModeMultiplayer = document.getElementById('btn-mode-multiplayer');
const btnModeCampaign = document.getElementById('btn-mode-campaign');

if (btnModeMultiplayer) {
    btnModeMultiplayer.addEventListener('click', () => {
        if (gamemodeMenu) gamemodeMenu.classList.add('hidden');
        if (lobbyMenu) {
            lobbyMenu.classList.remove('hidden');
            lobbyMenu.style.display = 'flex';
            const title = lobbyMenu.querySelector('h1');
            if (title) title.textContent = "Multiplayer Lobby";
        }
    });
}

if (btnModeCampaign) {
    btnModeCampaign.addEventListener('click', () => {
        if (gamemodeMenu) gamemodeMenu.classList.add('hidden');
        if (campaignMenu) {
            campaignMenu.classList.remove('hidden');
            campaignMenu.style.display = 'flex';
        }
    });
}

// Campaign Menu Listeners
const btnCampaignSingle = document.getElementById('btn-campaign-single');
const btnCampaignCoop = document.getElementById('btn-campaign-coop');
const btnCampaignBack = document.getElementById('btn-campaign-back');

if (btnCampaignBack) {
    btnCampaignBack.addEventListener('click', () => {
        if (campaignMenu) campaignMenu.classList.add('hidden');
        if (gamemodeMenu) {
            gamemodeMenu.classList.remove('hidden');
            gamemodeMenu.style.display = 'flex';
        }
    });
}

if (btnCampaignSingle) {
    /* Moved to later in file to access networkManager
    btnCampaignSingle.addEventListener('click', () => {
        if (campaignMenu) campaignMenu.classList.add('hidden');
        if (lobbyMenu) {
            lobbyMenu.classList.remove('hidden');
            lobbyMenu.style.display = 'flex';
            const title = lobbyMenu.querySelector('h1');
            if (title) title.textContent = "Campaign (Singleplayer)";
            // Here we could auto-trigger hosting or set a game mode flag
        }
    });
    */
}

if (btnCampaignCoop) {
    btnCampaignCoop.addEventListener('click', () => {
        if (campaignMenu) campaignMenu.classList.add('hidden');
        if (lobbyMenu) {
            lobbyMenu.classList.remove('hidden');
            lobbyMenu.style.display = 'flex';
            const title = lobbyMenu.querySelector('h1');
            if (title) title.textContent = "Campaign (Co-op)";
        }
    });
}

// Lobby Back Button
const btnLobbyBack = document.getElementById('btn-lobby-back');
if (btnLobbyBack) {
    btnLobbyBack.addEventListener('click', () => {
        if (lobbyMenu) lobbyMenu.classList.add('hidden');
        if (gamemodeMenu) {
            gamemodeMenu.classList.remove('hidden');
            gamemodeMenu.style.display = 'flex';
        }
    });
}
// ----------------------------------

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
const potionMeshes = new Map();

// Network Callbacks
// onLocalPlayerInit is defined below with chat logic


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
    const minimapCanvas = document.getElementById('minimap');
    
    console.log("Hiding start menu, showing UI");
    if (startMenu) startMenu.classList.add('hidden');
    if (ui) ui.style.display = 'block';
    if (scoreUI) scoreUI.style.display = 'block';
    if (minimapCanvas) minimapCanvas.classList.remove('hidden');
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
        healthBar.className = ''; // Reset classes
        if (health > 50) healthBar.classList.add('high');
        else if (health > 25) healthBar.classList.add('medium');
        else healthBar.classList.add('low');
    }
};

networkManager.onPlayerHitCallback = (id, shooterId) => {
    // Determine position of the hit player
    let position = null;

    if (id === networkManager.playerId) {
        // It's me!
        position = player.mesh.position.clone();
        // Add a bit of height to center on body
        position.y += 1.0;
    } else if (remotePlayers.has(id)) {
        // It's a remote player
        const rp = remotePlayers.get(id);
        position = rp.mesh.position.clone();
        position.y += 1.0;
    }

    if (position) {
        // Emit red particles (blood/magic impact)
        particleSystem.emit(position, 0xff0000, 15, 8, 0.5);
        soundManager.playExplosion(); // Or a specific hit sound if we had one
    }

    // Hit Marker Logic
    if (shooterId === networkManager.playerId) {
        const hm = document.getElementById('hit-marker');
        if (hm) {
            hm.classList.remove('hidden');
            soundManager.playHitMarker();
            setTimeout(() => {
                if (hm) hm.classList.add('hidden');
            }, 100);
        }
    }
};

networkManager.onPlayerDied = () => {
    console.log("You Died!");
    player.onDeath();
    
    // Show respawn menu
    const menu = document.getElementById('respawn-menu');
    if (menu) {
        menu.classList.remove('hidden');
        menu.style.display = 'flex';
        document.exitPointerLock();
    }
};

// Respawn Button Logic
const respawnBtn = document.getElementById('respawn-btn');
if (respawnBtn) {
    respawnBtn.addEventListener('click', () => {
        // Request respawn from server
        networkManager.send('requestRespawn', {});
        
        // Hide menu
        const menu = document.getElementById('respawn-menu');
        if (menu) {
            menu.classList.add('hidden');
            menu.style.display = 'none';
        }
        
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

let localCrystals = [];

networkManager.onCrystalsInit = (crystals) => {
    localCrystals = crystals;
    // Clear existing
    crystalMeshes.forEach(mesh => scene.remove(mesh));
    crystalMeshes.clear();

    const geo = new THREE.OctahedronGeometry(1, 0);
    
    crystals.forEach(c => {
        // Determine color based on team
        const color = c.team === 'blue' ? 0x0000ff : 0xff0000;
        const mat = new THREE.MeshStandardMaterial({ 
            color: color, 
            emissive: color,
            emissiveIntensity: 2
        });

        if (c.state === 'home' || c.state === 'dropped') {
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(c.x, c.y, c.z);
            
            // Add light
            const light = new THREE.PointLight(color, 2, 20);
            mesh.add(light);
            
            scene.add(mesh);
            crystalMeshes.set(c.id, mesh);
        }
    });
};

networkManager.onCrystalUpdate = (data) => {
    // Update local data
    const crystal = localCrystals.find(c => c.id === data.id);
    if (crystal) {
        const oldCarrierId = crystal.carrierId;
        
        // Update data
        Object.assign(crystal, data);

        // Handle Carrier Visuals
        if (oldCarrierId && oldCarrierId !== data.carrierId) {
            // Dropped
            if (remotePlayers.has(oldCarrierId)) {
                remotePlayers.get(oldCarrierId).setCarrying(null);
            }
        }
        
        if (data.state === 'carried' && data.carrierId) {
            // Picked up
            if (remotePlayers.has(data.carrierId)) {
                const color = crystal.team === 'blue' ? 0x0000ff : 0xff0000;
                remotePlayers.get(data.carrierId).setCarrying(color);
            }
        }

        // Update World Visuals
        if (data.state === 'carried') {
            // Remove from world
            if (crystalMeshes.has(data.id)) {
                const mesh = crystalMeshes.get(data.id);
                scene.remove(mesh);
                crystalMeshes.delete(data.id);
            }
        } else if (data.state === 'dropped' || data.state === 'home') {
            // Ensure it exists in world
            if (!crystalMeshes.has(data.id)) {
                const color = crystal.team === 'blue' ? 0x0000ff : 0xff0000;
                const geo = new THREE.OctahedronGeometry(1, 0);
                const mat = new THREE.MeshStandardMaterial({ 
                    color: color, 
                    emissive: color,
                    emissiveIntensity: 2
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.set(data.x, data.y, data.z);
                const light = new THREE.PointLight(color, 2, 20);
                mesh.add(light);
                scene.add(mesh);
                crystalMeshes.set(data.id, mesh);
            } else {
                // Update position
                const mesh = crystalMeshes.get(data.id);
                mesh.position.set(data.x, data.y, data.z);
            }
        }
    }
};

networkManager.onCrystalCaptured = (data) => {
    // Play sound / particles
    soundManager.playExplosion(); // Victory sound?
    updateScoreUI(data.scores);
    
    // Show message
    const msg = `${data.team.toUpperCase()} Team Captured the Flag!`;
    addChatMessage("System", msg, true);
};

networkManager.onCrystalCollectedCallback = (data) => {
    // Legacy handler, might not be needed if we use onCrystalUpdate
    // But we might use it for sound effects
    if (data.team) {
        // Someone picked it up
    }
    if (data.scores) updateScoreUI(data.scores);
};

networkManager.onScoreUpdate = (scores) => {
    updateScoreUI(scores);
};

networkManager.onGameOver = (data) => {
    const screen = document.getElementById('game-over-screen');
    const title = document.getElementById('game-over-title');
    const msg = document.getElementById('game-over-msg');
    
    if (screen && title && msg) {
        screen.classList.remove('hidden');
        screen.style.display = 'flex'; // Ensure flex display
        
        const myTeam = player.team;
        const winner = data.winner;
        
        if (myTeam === winner) {
            title.textContent = "VICTORY";
            title.style.color = "#ffff00"; // Gold
            msg.textContent = `${winner.toUpperCase()} TEAM WINS!`;
            soundManager.playExplosion(); // Victory sound
        } else {
            title.textContent = "DEFEAT";
            title.style.color = "#ff0000"; // Red
            msg.textContent = `${winner.toUpperCase()} TEAM WINS!`;
        }
        
        // Unlock cursor
        document.exitPointerLock();
    }
};

networkManager.onGameReset = (data) => {
    // Hide game over screen
    const screen = document.getElementById('game-over-screen');
    if (screen) {
        screen.classList.add('hidden');
        screen.style.display = 'none';
    }
    
    // Reset local state
    updateScoreUI(data.scores);
    if (networkManager.onCrystalsInit) networkManager.onCrystalsInit(data.crystals);
    
    // Respawn player at base
    player.health = 100;
    player.isDead = false;
    
    let spawn = new THREE.Vector3(0, 32, 0);
    if (player.team === 'blue') spawn.set(-150, 32, 150);
    else if (player.team === 'red') spawn.set(-150, 32, -150);
    
    player.mesh.position.copy(spawn);
    player.physicsPosition.copy(spawn);
    player.velocity.set(0, 0, 0);
    
    addChatMessage("System", "Game has been reset!", true);
};

const btnPlayAgain = document.getElementById('play-again-btn');
if (btnPlayAgain) {
    btnPlayAgain.addEventListener('click', () => {
        networkManager.send('requestRestart', {});
    });
}

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
// lobbyMenu is defined at the top
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

// Helper to toggle visibility
const show = (el) => el && el.classList.remove('hidden');
const hide = (el) => el && el.classList.add('hidden');

// Network Callbacks for Lobby
networkManager.onPlayerListUpdate = (players) => {
    // Update Lobby List
    if (playerList) {
        playerList.innerHTML = '';
        players.forEach(p => {
            const li = document.createElement('li');
            const isMe = p.id === networkManager.playerId;
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'name';
            nameSpan.textContent = `${p.name} ${isMe ? " (You)" : ""}`;
            
            li.appendChild(nameSpan);
            playerList.appendChild(li);
        });
    }

    // Update Scoreboard
    const tbody = document.getElementById('scoreboard-body');
    if (tbody) {
        tbody.innerHTML = '';
        // Sort by kills
        const sortedPlayers = [...players].sort((a, b) => (b.kills || 0) - (a.kills || 0));
        
        sortedPlayers.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.name}</td>
                <td>${p.kills || 0}</td>
                <td>${p.deaths || 0}</td>
                <td>${p.ping || 0}ms</td>
            `;
            tbody.appendChild(tr);
        });
    }
};

networkManager.onGameStarted = () => {
    console.log("Game Started!");
    if (lobbyMenu) lobbyMenu.classList.add('hidden');
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
    
    // Show Team Selection
    const startMenu = document.getElementById('start-menu');
    if (startMenu) {
        startMenu.classList.remove('hidden');
        startMenu.style.display = 'flex';
    }
};

// Class Selection Logic
let selectedClass = 'witch';
const btnClassWitch = document.getElementById('btn-class-witch');
const btnClassWarlock = document.getElementById('btn-class-warlock');

if (btnClassWitch && btnClassWarlock) {
    btnClassWitch.addEventListener('click', () => {
        selectedClass = 'witch';
        btnClassWitch.classList.add('selected');
        btnClassWarlock.classList.remove('selected');
        player.setCharacterClass('witch');
    });

    btnClassWarlock.addEventListener('click', () => {
        selectedClass = 'warlock';
        btnClassWarlock.classList.add('selected');
        btnClassWitch.classList.remove('selected');
        player.setCharacterClass('warlock');
    });
}

// Single Player Instant Start
if (btnCampaignSingle) {
    btnCampaignSingle.addEventListener('click', async () => {
        if (campaignMenu) campaignMenu.classList.add('hidden');
        
        // Show loading or something?
        // For now just start
        
        const playerName = "Player"; 
        
        try {
            // Host game
            await networkManager.hostGame(null, playerName, selectedClass);
            
            // Start game immediately
            if (networkManager.gameHost) {
                networkManager.gameHost.startGame();
                
                // Auto-join Blue Team to skip selection
                setTimeout(() => {
                    networkManager.send('joinTeam', 'blue');
                }, 100);
            }
        } catch (err) {
            console.error("Failed to start single player:", err);
            alert("Failed to start single player: " + err);
            if (campaignMenu) campaignMenu.classList.remove('hidden');
        }
    });
}
