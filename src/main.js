import * as THREE from 'three';
import { VoxelWorld } from './world/VoxelWorld.js';
import { Player } from './gameplay/Player.js';
import { MiniMap } from './ui/MiniMap.js';
import { ParticleSystem } from './core/ParticleSystem.js';
import { SoundManager } from './core/SoundManager.js';
import { NetworkManager } from './core/NetworkManager.js';
import { RemotePlayer } from './gameplay/RemotePlayer.js';

// --- UI SETUP (Run immediately) ---
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const lobbyMenu = document.getElementById('lobby-menu');

if (startBtn && startScreen) {
    startBtn.addEventListener('click', () => {
        console.log('Start button clicked');
        startScreen.style.display = 'none';
        if (lobbyMenu) {
            lobbyMenu.style.display = 'flex';
            lobbyMenu.classList.remove('hidden');
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

if (btnHost) {
    btnHost.addEventListener('click', async () => {
        const customId = inputCustomHostId.value.trim() || null;
        const playerName = inputPlayerName.value.trim() || "Host";
        
        lobbyStatus.textContent = "Initializing Host...";
        try {
            const id = await networkManager.hostGame(customId, playerName);
            lobbyStatus.textContent = ""; // Clear status
            
            // Show Waiting Room
            hide(mainMenuButtons);
            show(waitingRoom);
            show(startGameBtn);
            hide(waitingMsg);
            lobbyNameDisplay.textContent = id;
            
            // Show Chat
            if (chatContainer) chatContainer.classList.remove('hidden');
            addChatMessage("System", "Lobby created. Waiting for players...", true);

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
            hide(mainMenuButtons);
            show(waitingRoom);
            hide(startGameBtn);
            show(waitingMsg);
            lobbyNameDisplay.textContent = id;
            
            // Show Chat
            if (chatContainer) chatContainer.classList.remove('hidden');
            addChatMessage("System", "Connected to lobby.", true);
            
        } catch (err) {
            lobbyStatus.textContent = "Error: " + err;
        }
    });
}

// Start Menu Logic
const ui = document.getElementById('ui');
let gameStarted = false;

// Add Score UI
const scoreUI = document.createElement('div');
scoreUI.id = 'score-ui';
document.body.appendChild(scoreUI);

// Remove old listener if it exists (it was replaced above, but just to be safe regarding the old button code)
// The previous replace_string_in_file removed the onLocalPlayerInit block which contained the logic.
// Now we need to remove the old button listener for 'btn-join' which is no longer in the HTML.

// Lobby List Logic
const lobbyListContainer = document.getElementById('lobby-list-container');
const btnRefreshLobbies = document.getElementById('btn-refresh-lobbies');
const activeLobbies = new Map();

function renderLobbyList() {
    if (!lobbyListContainer) return;
    lobbyListContainer.innerHTML = '';
    if (activeLobbies.size === 0) {
        lobbyListContainer.innerHTML = '<div style="color: #aaa; font-size: 0.8rem; text-align: center; padding: 20px;">No active lobbies found.<br>Be the first to host!</div>';
        return;
    }
    
    activeLobbies.forEach((data, id) => {
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.borderBottom = '1px solid #444';
        div.style.cursor = 'pointer';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.className = 'lobby-item';
        
        div.innerHTML = `
            <div>
                <div style="font-weight: bold; color: #fff;">${data.name || id}</div>
                <div style="font-size: 0.8rem; color: #aaa;">ID: ${id}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 0.8rem; color: #00ffff;">${data.players || '?'} Players</div>
                <button class="join-lobby-btn" style="background: var(--primary-color); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">JOIN</button>
            </div>
        `;
        
        const joinBtn = div.querySelector('.join-lobby-btn');
        joinBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent div click
            if (inputHostId) inputHostId.value = id;
            // Trigger join
            if (btnJoin) btnJoin.click();
        });

        div.addEventListener('click', () => {
            if (inputHostId) inputHostId.value = id;
            // Highlight selection
            Array.from(lobbyListContainer.children).forEach(c => c.style.background = 'transparent');
            div.style.background = 'rgba(160, 32, 240, 0.3)';
        });
        
        div.addEventListener('mouseenter', () => {
            if (div.style.background !== 'rgba(160, 32, 240, 0.3)') div.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        div.addEventListener('mouseleave', () => {
            if (div.style.background !== 'rgba(160, 32, 240, 0.3)') div.style.background = 'transparent';
        });
        
        lobbyListContainer.appendChild(div);
    });
}

// Subscribe to lobbies
networkManager.subscribeToLobbies((id, data) => {
    if (data) {
        activeLobbies.set(id, data);
    } else {
        activeLobbies.delete(id);
    }
    renderLobbyList();
});

if (btnRefreshLobbies) {
    btnRefreshLobbies.addEventListener('click', () => {
        activeLobbies.clear();
        lobbyListContainer.innerHTML = '<div style="color: #aaa; font-size: 0.8rem; text-align: center; padding: 20px;">Refreshing...</div>';
        // GunDB will push updates again automatically
    });
}

// Chat Logic
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

function addChatMessage(name, message, isSystem = false) {
    const div = document.createElement('div');
    div.className = 'chat-msg';
    
    if (isSystem) {
        div.innerHTML = `<span class="system">${message}</span>`;
    } else {
        // Sanitize input
        const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeMsg = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        div.innerHTML = `<span class="name">${safeName}:</span><span class="msg">${safeMsg}</span>`;
    }
    
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

networkManager.onChatMessage = (data) => {
    addChatMessage(data.name, data.message);
};

if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const msg = chatInput.value.trim();
            if (msg) {
                networkManager.sendChat(msg);
                chatInput.value = '';
            }
        }
        e.stopPropagation(); // Prevent game controls from triggering
    });
    
    // Prevent WASD movement while typing
    chatInput.addEventListener('focus', () => {
        // Maybe disable game controls flag here if needed
    });
}

// Global Key Listener for Chat
document.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && document.activeElement !== chatInput && document.activeElement.tagName !== 'INPUT') {
        if (chatInput && !chatContainer.classList.contains('hidden')) {
            e.preventDefault(); // Prevent typing 't'
            chatInput.focus();
        }
    }
});

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Potion System
function createPotionMesh(type) {
    let color = 0xffffff;
    if (type === 'speed') color = 0xffff00; // Yellow
    else if (type === 'shield') color = 0x00ffff; // Cyan
    else if (type === 'berserk') color = 0xff0000; // Red

    const geometry = new THREE.OctahedronGeometry(0.5, 0);
    const material = new THREE.MeshStandardMaterial({ 
        color: color, 
        emissive: color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
    });
    const mesh = new THREE.Mesh(geometry, material);
    
    // Add floating animation helper
    mesh.userData = { 
        initialY: 0, 
        timeOffset: Math.random() * 100 
    };
    
    // Add light
    const light = new THREE.PointLight(color, 1, 5);
    mesh.add(light);
    
    return mesh;
}

networkManager.onPotionsInit = (potions) => {
    // Clear existing
    potionMeshes.forEach(mesh => scene.remove(mesh));
    potionMeshes.clear();

    potions.forEach(p => {
        const mesh = createPotionMesh(p.type);
        mesh.position.set(p.x, p.y, p.z);
        mesh.userData.initialY = p.y;
        mesh.userData.id = p.id;
        mesh.visible = p.active;
        
        scene.add(mesh);
        potionMeshes.set(p.id, mesh);
    });
};

networkManager.onPotionUpdate = (data) => {
    const mesh = potionMeshes.get(data.id);
    if (mesh) {
        mesh.visible = data.active;
        if (data.active) {
            // Play spawn sound/effect?
        } else {
            // Play collect sound/effect?
            particleSystem.emit(mesh.position, mesh.material.color.getHex(), 20);
        }
    }
};

networkManager.onApplyPotion = (type) => {
    player.applyPotion(type);
    soundManager.playPowerup();
};

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
        
        // Update Potions
        const time = performance.now() / 1000;
        potionMeshes.forEach((mesh, id) => {
            if (mesh.visible) {
                // Float animation
                mesh.position.y = mesh.userData.initialY + Math.sin(time * 2 + mesh.userData.timeOffset) * 0.5;
                mesh.rotation.y += delta;

                // Collision Check
                if (player.position.distanceTo(mesh.position) < 1.5) {
                    // Collect
                    networkManager.collectPotion(id);
                    // Hide locally immediately to prevent double collect (server will confirm)
                    mesh.visible = false; 
                }
            }
        });

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

        // Check Base Collision (Capture)
        const myTeam = player.team;
        if (myTeam) {
            let basePos;
            if (myTeam === 'blue') basePos = new THREE.Vector3(-150, 32, 150);
            else if (myTeam === 'red') basePos = new THREE.Vector3(-150, 32, -150);
            
            if (basePos && player.position.distanceTo(basePos) < 5) {
                // Check if carrying enemy flag
                const carrying = localCrystals.some(c => c.carrierId === networkManager.playerId && c.team !== myTeam);
                if (carrying) {
                    networkManager.send('captureFlag', {});
                }
            }
        }
        
        // Update wind sound based on speed/height
        const speed = player.velocity.length();
        soundManager.updateWind(speed);
        
        // Handle Abilities
        if (player.input.isMouseButtonDown(2)) { // Right Click
            player.useAbility();
        }
    } else {
        // Optional: Rotate camera around the world or something for a nice intro
    }

    renderer.render(scene, camera);
}

animate();

networkManager.onKillFeedCallback = (data) => {
    const feed = document.getElementById('kill-feed');
    if (feed) {
        const msg = document.createElement('div');
        msg.className = 'kill-msg';
        msg.innerHTML = `<span style="color: #ff4444">${data.killer}</span> ${data.method} <span style="color: #00ffff">${data.victim}</span>`;
        feed.appendChild(msg);
        
        // Remove after animation
        setTimeout(() => {
            if (msg.parentNode) msg.parentNode.removeChild(msg);
        }, 5000);
    }
};

// Scoreboard Toggle
document.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
        e.preventDefault(); // Prevent focus change
        const sb = document.getElementById('scoreboard');
        if (sb) sb.classList.remove('hidden');
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Tab') {
        const sb = document.getElementById('scoreboard');
        if (sb) sb.classList.add('hidden');
    }
});
