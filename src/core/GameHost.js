export class GameHost {
    constructor(networkManager) {
        this.networkManager = networkManager;
        this.players = {};
        this.crystals = [
            { id: 2, x: -150, y: 60, z: 150, active: true },  // Ice Tower
            { id: 4, x: -150, y: 60, z: -150, active: true }  // Volcanic Tower
        ];
        this.scores = { red: 0, blue: 0 };
        this.TEAMS = ['red', 'blue'];
    }

    init() {
        // Reset state
        this.scores = { red: 0, blue: 0 };
        this.crystals.forEach(c => c.active = true);
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
            health: 100
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
        const playerList = Object.values(this.players).map(p => ({ id: p.id, name: p.name }));
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
                this.handlePlayerDeath(targetId);
            }
        }
    }

    handlePlayerDeath(id) {
        const player = this.players[id];
        if (player) {
            // Respawn logic
            this.networkManager.broadcast('playerDied', { id: id });
            
            // Reset health and respawn after delay
            setTimeout(() => {
                if (this.players[id]) {
                    this.players[id].health = 100;
                    // Respawn at team base
                    let spawnX = 0, spawnZ = 0;
                    if (player.team === 'blue') { spawnX = -150; spawnZ = 150; }
                    else if (player.team === 'red') { spawnX = -150; spawnZ = -150; }
                    
                    this.players[id].x = spawnX;
                    this.players[id].y = 32;
                    this.players[id].z = spawnZ;
                    
                    this.networkManager.sendTo(id, 'teamAssigned', this.players[id]); // Re-send spawn info
                    this.networkManager.broadcast('playerDamaged', { id: id, health: 100 }); // Reset health bar
                }
            }, 3000);
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
        if (crystal && crystal.active) {
            crystal.active = false;
            const player = this.players[id];
            if (player) {
                this.scores[player.team]++;
                this.networkManager.broadcast('crystalCollected', {
                    id: crystalId,
                    team: player.team,
                    scores: this.scores
                });

                this.checkWinCondition();
            }
        }
    }

    checkWinCondition() {
        const activeCrystals = this.crystals.filter(c => c.active).length;
        if (activeCrystals === 0) {
            let winner = 'red';
            let maxScore = -1;
            for (const [t, s] of Object.entries(this.scores)) {
                if (s > maxScore) {
                    maxScore = s;
                    winner = t;
                }
            }
            this.networkManager.broadcast('gameOver', { winner: winner });
            setTimeout(() => this.resetGame(), 5000);
        }
    }

    resetGame() {
        this.crystals.forEach(c => c.active = true);
        this.scores = { red: 0, blue: 0 };
        this.networkManager.broadcast('gameReset', {
            crystals: this.crystals,
            scores: this.scores
        });
    }
}
