import { Peer } from "peerjs";
import { GameHost } from "./GameHost.js";

export class NetworkManager {
    constructor() {
        this.peer = null;
        this.conn = null; // Connection to Host (if client)
        this.connections = []; // Connections to Clients (if host)
        this.isHost = false;
        this.gameHost = null;
        this.playerId = null;
        
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

    async hostGame() {
        this.isHost = true;
        this.peer = new Peer(); // Auto-generate ID
        
        return new Promise((resolve, reject) => {
            this.peer.on('open', (id) => {
                console.log('My peer ID is: ' + id);
                this.playerId = id;
                this.gameHost = new GameHost(this);
                this.gameHost.init();
                this.gameHost.addPlayer(id); // Add self
                
                this.showConnectionStatus(true, `Hosting: ${id}`);
                resolve(id);
            });

            this.peer.on('connection', (conn) => {
                this.handleConnection(conn);
            });

            this.peer.on('error', (err) => {
                console.error(err);
                this.showConnectionStatus(false, err.type);
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
