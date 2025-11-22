import { Peer } from "peerjs";
import { io } from "socket.io-client";
import { GameHost } from "./GameHost.js";

export class NetworkManager {
    constructor() {
        this.peer = null;
        this.conn = null; // Connection to Host (if client)
        this.connections = []; // Connections to Clients (if host)
        this.isHost = false;
        this.gameHost = null;
        this.playerId = null;
        
        // Lobby Socket
        this.lobbySocket = null;
        
        // Callbacks
        this.onLocalPlayerInit = null;
        this.onPlayerJoinedCallback = null;
        this.onPlayerLeftCallback = null;
        this.onPlayerMovedCallback = null;
        this.onCrystalsInit = null;
        this.onCrystalCollectedCallback = null;
        this.onScoreUpdate = null;
        this.onTeamAssignedCallback = null;
    }

    // Connect to the Lobby Server to get room lists
    connectToLobbyServer() {
        // If on GitHub Pages, skip trying to connect to localhost/relative port 3001
        if (window.location.hostname.includes('github.io')) {
            console.log("On GitHub Pages - skipping Lobby Server connection (Direct P2P Mode).");
            return Promise.resolve(false);
        }

        // We use a short timeout to detect if the server is available.
        const serverUrl = `http://${window.location.hostname}:3001`;
        this.lobbySocket = io(serverUrl, {
            reconnectionAttempts: 2,
            timeout: 2000
        });
        
        return new Promise((resolve) => {
            this.lobbySocket.on('connect', () => {
                console.log("Connected to Lobby Server");
                resolve(true);
            });
            this.lobbySocket.on('connect_error', () => {
                console.warn("Lobby Server unreachable - switching to Direct P2P mode");
                resolve(false);
            });
        });
    }

    async createLobby(name) {
        let connected = false;
        if (!this.lobbySocket || !this.lobbySocket.connected) {
             connected = await this.connectToLobbyServer();
        } else {
             connected = true;
        }
        
        this.isHost = true;
        this.peer = new Peer(); // Auto-generate ID
        
        return new Promise((resolve, reject) => {
            this.peer.on('open', (id) => {
                console.log('My peer ID is: ' + id);
                this.playerId = id;
                this.gameHost = new GameHost(this);
                this.gameHost.init();
                this.gameHost.addPlayer(id); // Add self
                
                if (connected) {
                    // Register with Lobby Server
                    this.lobbySocket.emit('createLobby', { hostPeerId: id, name: name });
                    
                    this.lobbySocket.once('lobbyCreated', (lobby) => {
                        this.showConnectionStatus(true, `Hosting: ${lobby.code}`);
                        resolve(lobby.code);
                    });
                } else {
                    // Fallback: Return the full Peer ID
                    this.showConnectionStatus(true, `Hosting (Direct): ${id}`);
                    resolve(id);
                }
            });

            this.peer.on('connection', (conn) => {
                this.handleConnection(conn);
            });

            this.peer.on('error', (err) => {
                console.error(err);
                this.showConnectionStatus(false, err.type);
                reject(err); // Reject promise on error
            });
        });
    }

    async joinLobby(code) {
        // If code is long, assume it's a direct Peer ID
        if (code.length > 10) {
            return this.joinGame(code);
        }

        let connected = false;
        if (!this.lobbySocket || !this.lobbySocket.connected) {
             connected = await this.connectToLobbyServer();
        } else {
             connected = true;
        }

        if (!connected) {
            throw new Error("Lobby Server unreachable. Please use a Direct Peer ID.");
        }

        return new Promise((resolve, reject) => {
            this.lobbySocket.emit('joinLobby', code);
            
            this.lobbySocket.once('lobbyJoined', (lobby) => {
                this.joinGame(lobby.hostPeerId).then(resolve).catch(reject);
            });
            
            this.lobbySocket.once('error', (err) => {
                reject(err);
            });
        });
    }

    async joinGame(hostId) {
        this.isHost = false;
        this.peer = new Peer();

        return new Promise((resolve, reject) => {
            this.peer.on('open', (id) => {
                this.playerId = id;
                console.log('My peer ID is: ' + id);
                
                this.conn = this.peer.connect(hostId);
                
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
                });
            });
        });
    }

    handleConnection(conn) {
        console.log("Client connected:", conn.peer);
        this.connections.push(conn);
        
        conn.on('open', () => {
            this.gameHost.addPlayer(conn.peer);
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
                this.onPlayerJoined(payload);
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

    joinTeam(team) {
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
}
