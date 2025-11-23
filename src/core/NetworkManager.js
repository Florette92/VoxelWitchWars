import { Peer } from "peerjs";
import Gun from "gun";
import { GameHost } from "./GameHost.js";

export class NetworkManager {
    constructor() {
        this.peer = null;
        this.gun = Gun(['https://gun-manhattan.herokuapp.com/gun']);
        this.lobbies = this.gun.get('voxelwitchwars').get('lobbies');
        this.lobbyHeartbeat = null;

        this.conn = null; // Connection to Host (if client)
        this.connections = []; // Connections to Clients (if host)
        this.isHost = false;
        this.gameHost = null;
        this.playerId = null;
        this.playerName = "Player";
        
        // Callbacks
        this.onLocalPlayerInit = null;
        this.onPlayerJoinedCallback = null;
        this.onPlayerLeftCallback = null;
        this.onPlayerMovedCallback = null;
        this.onCrystalsInit = null;
        this.onCrystalCollectedCallback = null;
        this.onScoreUpdate = null;
        this.onTeamAssignedCallback = null;
        this.onPlayerListUpdate = null;
        this.onGameStarted = null;
        this.onHealthUpdate = null;
        this.onPlayerHitCallback = null; // New callback for visual effects
        this.onPlayerDied = null;
        this.onKillFeedCallback = null;
        this.onChatMessage = null; // Callback for chat messages
    }

    async hostGame(customId = null, playerName = "Host") {
        this.isHost = true;
        this.playerName = playerName;
        const config = {
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:global.stun.twilio.com:3478' }
                ]
            }
        };

        console.log("Initializing Peer...");

        try {
            if (customId) {
                this.peer = new Peer(customId, config);
            } else {
                this.peer = new Peer(config); // Auto-generate ID
            }
        } catch (e) {
            console.error("PeerJS Init Error:", e);
            throw new Error("Failed to initialize network: " + e.message);
        }
        
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                if (this.peer) this.peer.destroy();
                reject("Connection timed out (10s). Check firewall/network.");
            }, 10000);

            this.peer.on('open', (id) => {
                clearTimeout(timeout);
                console.log('My peer ID is: ' + id);
                this.playerId = id;
                
                try {
                    this.gameHost = new GameHost(this);
                    this.gameHost.init();
                    this.gameHost.addPlayer(id, playerName); // Add self with name
                    
                    this.showConnectionStatus(true, `Hosting: ${id}`);
                    this.publishLobby(id, customId || (playerName + "'s Game"));
                    resolve(id);
                } catch (err) {
                    console.error("GameHost Init Error:", err);
                    reject("Failed to start GameHost: " + err.message);
                }
            });

            this.peer.on('connection', (conn) => {
                this.handleConnection(conn);
            });

            this.peer.on('error', (err) => {
                clearTimeout(timeout);
                console.error("Peer Error:", err);
                let msg = err.type;
                if (err.type === 'unavailable-id') {
                    msg = "ID already taken. Try another.";
                } else if (err.type === 'browser-incompatible') {
                    msg = "Browser does not support WebRTC.";
                } else if (err.type === 'network') {
                    msg = "Network error. Check connection.";
                }
                this.showConnectionStatus(false, msg);
                reject(msg);
            });
        });
    }

    async joinGame(hostId, playerName = "Player") {
        this.isHost = false;
        this.playerName = playerName;
        const config = {
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:global.stun.twilio.com:3478' }
                ]
            }
        };
        this.peer = new Peer(undefined, config);

        return new Promise((resolve, reject) => {
            this.peer.on('open', (id) => {
                this.playerId = id;
                console.log('My peer ID is: ' + id);
                
                this.conn = this.peer.connect(hostId, {
                    metadata: { name: playerName }
                });
                
                this.conn.on('open', () => {
                    console.log("Connected to Host");
                    this.showConnectionStatus(true, "Connected to Host");
                    resolve();
                });

                this.conn.on('data', (data) => {
                    this.handleMessage(data);
                });

                this.conn.on('close', () => {
                    this.showConnectionStatus(false, "Disconnected");
                });
                
                this.conn.on('error', (err) => {
                    console.error("Connection Error", err);
                    this.showConnectionStatus(false, "Connection Error");
                    reject(err);
                });
            });

            this.peer.on('error', (err) => {
                console.error("Peer Error", err);
                reject(err);
            });
        });
    }

    handleConnection(conn) {
        console.log("Client connected:", conn.peer);
        this.connections.push(conn);
        
        conn.on('open', () => {
            const playerName = conn.metadata && conn.metadata.name ? conn.metadata.name : "Unknown";
            this.gameHost.addPlayer(conn.peer, playerName);
        });

        conn.on('data', (data) => {
            // Host receiving message from client
            if (this.gameHost) {
                this.gameHost.handleMessage(conn.peer, data.type, data.payload);
            }
        });

        conn.on('close', () => {
            this.connections = this.connections.filter(c => c !== conn);
            if (this.gameHost) {
                this.gameHost.removePlayer(conn.peer);
            }
        });
    }

    // Send message to Host (if client) or process locally (if host)
    send(type, payload) {
        if (this.isHost) {
            // Loopback to local GameHost
            if (this.gameHost) {
                this.gameHost.handleMessage(this.playerId, type, payload);
            }
        } else {
            if (this.conn && this.conn.open) {
                this.conn.send({ type, payload });
            }
        }
    }

    // Used by GameHost to send to specific client
    sendTo(peerId, type, payload) {
        if (peerId === this.playerId) {
            // Local message
            this.handleMessage({ type, payload });
        } else {
            const conn = this.connections.find(c => c.peer === peerId);
            if (conn && conn.open) {
                conn.send({ type, payload });
            }
        }
    }

    // Used by GameHost to broadcast
    broadcast(type, payload, excludeId = null) {
        // Send to self if not excluded
        if (this.playerId !== excludeId) {
            this.handleMessage({ type, payload });
        }

        // Send to all connected clients
        this.connections.forEach(conn => {
            if (conn.peer !== excludeId && conn.open) {
                conn.send({ type, payload });
            }
        });
    }

    handleMessage(data) {
        const { type, payload } = data;
        
        switch (type) {
            case 'playerListUpdate':
                if (this.onPlayerListUpdate) {
                    this.onPlayerListUpdate(payload);
                }
                break;
            case 'gameStarted':
                if (this.onGameStarted) {
                    this.onGameStarted();
                }
                break;
            case 'init':
                // Handle Local Player Init (Team assignment)
                if (payload.players[this.playerId]) {
                    if (this.onLocalPlayerInit) {
                        this.onLocalPlayerInit(payload.players[this.playerId]);
                    }
                }
                // Handle existing players
                Object.values(payload.players).forEach(p => {
                    if (p.id !== this.playerId) {
                        this.onPlayerJoined(p);
                    }
                });
                if (this.onCrystalsInit) this.onCrystalsInit(payload.crystals);
                if (this.onScoreUpdate) this.onScoreUpdate(payload.scores);
                break;
            case 'playerJoined':
                if (payload.id !== this.playerId) {
                    this.onPlayerJoined(payload);
                }
                break;
            case 'playerLeft':
                if (this.onPlayerLeftCallback) this.onPlayerLeftCallback(payload);
                break;
            case 'playerMoved':
                if (this.onPlayerMovedCallback) this.onPlayerMovedCallback(payload);
                break;
            case 'crystalCollected':
                if (this.onCrystalCollectedCallback) this.onCrystalCollectedCallback(payload);
                break;
            case 'gameOver':
                alert("Game Over! Winner: " + payload.winner);
                break;
            case 'gameReset':
                if (this.onCrystalsInit) this.onCrystalsInit(payload.crystals);
                if (this.onScoreUpdate) this.onScoreUpdate(payload.scores);
                break;
            case 'teamAssigned':
                if (this.onTeamAssignedCallback) this.onTeamAssignedCallback(payload);
                break;
            case 'playerDamaged':
                // Trigger visual effect for everyone
                if (this.onPlayerHitCallback) {
                    this.onPlayerHitCallback(payload.id);
                }

                // Update health UI if it's me
                if (payload.id === this.playerId) {
                    if (this.onHealthUpdate) this.onHealthUpdate(payload.health);
                }
                break;
            case 'playerDied':
                if (payload.id === this.playerId) {
                    if (this.onPlayerDied) this.onPlayerDied();
                } else {
                    // Maybe show a death message for others?
                    console.log(`Player ${payload.id} died.`);
                }
                break;
            case 'chat':
                if (this.onChatMessage) this.onChatMessage(payload);
                break;
            case 'killFeed':
                if (this.onKillFeedCallback) this.onKillFeedCallback(payload);
                break;
        }
    }

    // Public API methods matching old interface
    sendMove(position, rotation, biome) {
        this.send("move", {
            x: position.x,
            y: position.y,
            z: position.z,
            rx: rotation.x,
            ry: rotation.y,
            biome: biome
        });
    }

    collectCrystal(id) {
        this.send("collectCrystal", id);
    }

    sendHit(targetId, damage) {
        this.send("hitPlayer", { targetId, damage });
    }

    joinTeam(team) {
        console.log("NetworkManager: Joining team", team);
        this.send("joinTeam", team);
    }

    onPlayerJoined(data) {
        if (this.onPlayerJoinedCallback) this.onPlayerJoinedCallback(data);
    }

    showConnectionStatus(connected, msg = "") {
        let statusDiv = document.getElementById('connection-status');
        if (!statusDiv) {
            statusDiv = document.createElement('div');
            statusDiv.id = 'connection-status';
            statusDiv.style.position = 'absolute';
            statusDiv.style.top = '10px';
            statusDiv.style.right = '10px';
            statusDiv.style.padding = '10px';
            statusDiv.style.borderRadius = '5px';
            statusDiv.style.fontFamily = 'monospace';
            statusDiv.style.fontWeight = 'bold';
            statusDiv.style.zIndex = '1000';
            statusDiv.style.maxWidth = '300px';
            statusDiv.style.wordWrap = 'break-word';
            document.body.appendChild(statusDiv);
        }
        
        if (connected) {
            statusDiv.textContent = msg || "🟢 Online";
            statusDiv.style.backgroundColor = "rgba(0, 255, 0, 0.8)";
            statusDiv.style.color = "white";
        } else {
            statusDiv.innerHTML = "🔴 Offline<br><small>" + msg + "</small>";
            statusDiv.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
            statusDiv.style.color = "white";
        }
    }

    // Lobby System
    publishLobby(id, name) {
        console.log("Publishing lobby:", name);
        const updateLobby = () => {
            this.lobbies.get(id).put({
                id: id,
                name: name,
                players: this.connections ? this.connections.length + 1 : 1,
                timestamp: Date.now()
            });
        };
        
        updateLobby();
        this.lobbyHeartbeat = setInterval(updateLobby, 2000);
        
        // Cleanup on unload
        window.addEventListener('beforeunload', () => {
            this.stopPublishingLobby(id);
        });
    }

    stopPublishingLobby(id) {
        if (this.lobbyHeartbeat) clearInterval(this.lobbyHeartbeat);
        this.lobbies.get(id).put(null);
    }

    subscribeToLobbies(callback) {
        console.log("Subscribing to lobbies...");
        this.lobbies.map().on((data, id) => {
            // Filter out old lobbies (older than 5 seconds) or nulls
            if (data && data.timestamp > Date.now() - 5000) {
                callback(id, data);
            } else {
                callback(id, null); // Signal to remove
            }
        });
    }

    sendChat(message) {
        this.send("chat", {
            id: this.playerId,
            name: this.playerName,
            message: message,
            timestamp: Date.now()
        });
    }
}
