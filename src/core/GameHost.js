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

    addPlayer(id) {
        console.log('Host: Player connected:', id);
        this.players[id] = {
            id: id,
            x: 0, y: 0, z: 0,
            rx: 0, ry: 0,
            team: 'spectator',
            biome: 'forest'
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
        const playerList = Object.keys(this.players);
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
