export class GameHost {
    constructor(networkManager) {
        this.networkManager = networkManager;
        this.players = {};
        this.crystals = [
            { 
                id: 'blue-flag', 
                team: 'blue',
                x: -150, y: 60, z: 150, 
                originalX: -150, originalY: 60, originalZ: 150,
                state: 'home', // home, carried, dropped
                carrierId: null
            },
            { 
                id: 'red-flag', 
                team: 'red',
                x: -150, y: 60, z: -150, 
                originalX: -150, originalY: 60, originalZ: -150,
                state: 'home',
                carrierId: null
            }
        ];
        this.scores = { red: 0, blue: 0 };
        this.TEAMS = ['red', 'blue'];
    }

    init() {
        // Reset state
        this.scores = { red: 0, blue: 0 };
        this.resetCrystals();
    }

    resetCrystals() {
        this.crystals.forEach(c => {
            c.x = c.originalX;
            c.y = c.originalY;
            c.z = c.originalZ;
            c.state = 'home';
            c.carrierId = null;
        });
    }

    addPlayer(id, name = "Unknown") {
        console.log('Host: Player connected:', id, name);
        this.players[id] = {
            id: id,
            name: name,
            x: 0, y: 0, z: 0,
            rx: 0, ry: 0,
            team: 'spectator',
            biome: 'forest',
            health: 100,
            kills: 0,
            deaths: 0
        };

        // Send initial state to the new player
        this.networkManager.sendTo(id, 'init', {
            id: id,
            players: this.players,
            crystals: this.crystals,
            scores: this.scores
        });

        this.broadcastPlayerList();
    }

    removePlayer(id) {
        console.log('Host: Player disconnected:', id);
        delete this.players[id];
        this.networkManager.broadcast('playerLeft', id);
        this.broadcastPlayerList();
    }

    broadcastPlayerList() {
        const playerList = Object.values(this.players).map(p => ({ 
            id: p.id, 
            name: p.name,
            kills: p.kills,
            deaths: p.deaths,
            ping: 0 // Placeholder for now
        }));
        this.networkManager.broadcast('playerListUpdate', playerList);
    }

    startGame() {
        this.networkManager.broadcast('gameStarted', {});
    }

    handleMessage(id, type, data) {
        switch (type) {
            case 'joinTeam':
                this.handleJoinTeam(id, data);
                break;
            case 'move':
                this.handleMove(id, data);
                break;
            case 'collectCrystal':
                this.handleCollectCrystal(id, data);
                break;
            case 'hitPlayer':
                this.handleHitPlayer(id, data);
                break;
            case 'chat':
                // Broadcast chat message to everyone
                this.networkManager.broadcast('chat', data);
                break;
            case 'captureFlag':
                this.handleCaptureFlag(id);
                break;
            case 'requestRestart':
                this.resetGame();
                break;
            case 'requestRespawn':
                this.handleRequestRespawn(id);
                break;
        }
    }

    handleHitPlayer(shooterId, data) {
        const { targetId, damage } = data;
        const target = this.players[targetId];
        
        if (target && target.health > 0) {
            target.health -= damage;
            if (target.health < 0) target.health = 0;
            
            // Notify everyone (or just target)
            this.networkManager.broadcast('playerDamaged', { id: targetId, health: target.health });
            
            if (target.health <= 0) {
                this.handlePlayerDeath(targetId, shooterId);
            }
        }
    }

    handlePlayerDeath(id, killerId) {
        const player = this.players[id];
        if (player) {
            // Update stats
            player.deaths++;
            if (killerId && this.players[killerId] && killerId !== id) {
                this.players[killerId].kills++;
            }

            // Broadcast Kill Feed
            const killerName = (killerId && this.players[killerId]) ? this.players[killerId].name : "Environment";
            this.networkManager.broadcast('killFeed', {
                killer: killerName,
                victim: player.name,
                method: 'blasted'
            });

            this.broadcastPlayerList(); // Update scoreboard

            // Check if carrying crystal
            const carriedCrystal = this.crystals.find(c => c.carrierId === id);
            if (carriedCrystal) {
                carriedCrystal.state = 'dropped';
                carriedCrystal.carrierId = null;
                carriedCrystal.x = player.x;
                carriedCrystal.y = player.y;
                carriedCrystal.z = player.z;
                
                this.networkManager.broadcast('crystalUpdate', {
                    id: carriedCrystal.id,
                    state: 'dropped',
                    x: player.x, y: player.y, z: player.z
                });
            }

            // Notify death
            this.networkManager.broadcast('playerDied', { id: id });
            
            // Wait for player to request respawn
        }
    }

    handleRequestRespawn(id) {
        const player = this.players[id];
        if (player) {
            player.health = 100;
            // Respawn at team base
            let spawnX = 0, spawnZ = 0;
            if (player.team === 'blue') { spawnX = -150; spawnZ = 150; }
            else if (player.team === 'red') { spawnX = -150; spawnZ = -150; }
            
            player.x = spawnX;
            player.y = 32;
            player.z = spawnZ;
            
            this.networkManager.sendTo(id, 'teamAssigned', player); // Re-send spawn info
            this.networkManager.broadcast('playerDamaged', { id: id, health: 100 }); // Reset health bar
            this.networkManager.broadcast('playerJoined', player); // Re-broadcast position/state to others
        }
    }


    handleJoinTeam(id, teamName) {
        console.log(`Host: Player ${id} joining team ${teamName}`);
        if (!this.TEAMS.includes(teamName)) {
            console.error(`Host: Invalid team ${teamName}`);
            return;
        }

        let spawnX = 0, spawnY = 32, spawnZ = 0;
        if (teamName === 'blue') { spawnX = -150; spawnZ = 150; }
        else if (teamName === 'red') { spawnX = -150; spawnZ = -150; }

        const player = this.players[id];
        if (player) {
            player.team = teamName;
            player.x = spawnX;
            player.y = spawnY;
            player.z = spawnZ;

            console.log(`Host: Assigning ${id} to ${teamName}`);

            // Notify the player
            this.networkManager.sendTo(id, 'teamAssigned', player);

            // Notify everyone else
            this.networkManager.broadcast('playerJoined', player);
        } else {
            console.error(`Host: Player ${id} not found in players list`);
        }
    }

    handleMove(id, data) {
        if (this.players[id]) {
            const p = this.players[id];
            p.x = data.x;
            p.y = data.y;
            p.z = data.z;
            p.rx = data.rx;
            p.ry = data.ry;
            p.biome = data.biome;

            // Broadcast to everyone else (excluding sender usually, but PeerJS broadcast might be simple loop)
            this.networkManager.broadcast('playerMoved', p, id);
        }
    }

    handleCollectCrystal(id, crystalId) {
        const crystal = this.crystals.find(c => c.id === crystalId);
        const player = this.players[id];
        
        if (crystal && player) {
            // Enemy Flag Logic
            if (crystal.team !== player.team) {
                if (crystal.state === 'home' || crystal.state === 'dropped') {
                    // Pick up flag
                    crystal.state = 'carried';
                    crystal.carrierId = id;
                    
                    this.networkManager.broadcast('crystalUpdate', {
                        id: crystalId,
                        state: 'carried',
                        carrierId: id
                    });
                }
            }
            // Friendly Flag Logic (Return)
            else if (crystal.team === player.team && crystal.state === 'dropped') {
                // Return flag to base
                crystal.state = 'home';
                crystal.carrierId = null;
                crystal.x = crystal.originalX;
                crystal.y = crystal.originalY;
                crystal.z = crystal.originalZ;

                this.networkManager.broadcast('crystalUpdate', {
                    id: crystalId,
                    state: 'home',
                    x: crystal.originalX,
                    y: crystal.originalY,
                    z: crystal.originalZ
                });
            }
        }
    }

    handleCaptureFlag(id) {
        const player = this.players[id];
        if (!player) return;

        // Find the flag this player is carrying
        const carriedCrystal = this.crystals.find(c => c.carrierId === id);
        
        if (carriedCrystal && carriedCrystal.team !== player.team) {
            // Capture!
            this.scores[player.team]++;
            
            // Reset the captured flag
            carriedCrystal.state = 'home';
            carriedCrystal.carrierId = null;
            carriedCrystal.x = carriedCrystal.originalX;
            carriedCrystal.y = carriedCrystal.originalY;
            carriedCrystal.z = carriedCrystal.originalZ;

            this.networkManager.broadcast('crystalCaptured', {
                id: carriedCrystal.id,
                team: player.team,
                scores: this.scores
            });

            this.networkManager.broadcast('crystalUpdate', {
                id: carriedCrystal.id,
                state: 'home',
                x: carriedCrystal.originalX,
                y: carriedCrystal.originalY,
                z: carriedCrystal.originalZ
            });

            this.checkWinCondition();
        }
    }

    checkWinCondition() {
        // First to 3 captures wins
        if (this.scores.red >= 3 || this.scores.blue >= 3) {
            let winner = this.scores.red >= 3 ? 'red' : 'blue';
            this.networkManager.broadcast('gameOver', { winner: winner });
            // Removed automatic reset
        }
    }

    resetGame() {
        this.resetCrystals();
        this.scores = { red: 0, blue: 0 };
        this.networkManager.broadcast('gameReset', {
            crystals: this.crystals,
            scores: this.scores
        });
    }
}
