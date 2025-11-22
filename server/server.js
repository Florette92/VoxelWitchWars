const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*", // Allow any origin
    methods: ["GET", "POST"]
    // credentials: true // Removed to avoid conflict with origin: "*"
  }
});

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html><head><title>Game Server</title></head><body><h1>Voxel Witch Wars Server is Running!</h1><p>This is the backend server. To play the game, please visit the Vite development URL (usually <a href="http://localhost:5173">http://localhost:5173</a>).</p></body></html>');
});

// Debug connection errors
io.engine.on("connection_error", (err) => {
    console.log("Connection Error:", err.req.url, err.message);
});

// Game State
const players = {};
const crystals = [
    { id: 2, x: -150, y: 60, z: 150, active: true },  // Ice Tower
    { id: 4, x: -150, y: 60, z: -150, active: true }  // Volcanic Tower
];

let scores = {
    red: 0,
    blue: 0
};

const TEAMS = ['red', 'blue'];

io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);

    // Initial State: Spectator / Unassigned
    players[socket.id] = {
        id: socket.id,
        x: 0, y: 0, z: 0,
        rx: 0, ry: 0,
        team: 'spectator',
        biome: 'forest'
    };

    // Send initial state (world, other players)
    socket.emit('init', {
        id: socket.id,
        players: players,
        crystals: crystals,
        scores: scores
    });

    // Note: We do NOT broadcast playerJoined yet. 
    // We wait until they pick a team.

    socket.on('joinTeam', (teamName) => {
        console.log(`Player ${socket.id} attempting to join team: ${teamName}`);
        if (!TEAMS.includes(teamName)) {
            console.log(`Invalid team name: ${teamName}`);
            return;
        }
        
        let spawnX = 0, spawnY = 32, spawnZ = 0;
        if (teamName === 'blue') { spawnX = -150; spawnZ = 150; }
        else if (teamName === 'red') { spawnX = -150; spawnZ = -150; }

        const player = players[socket.id];
        player.team = teamName;
        player.x = spawnX;
        player.y = spawnY;
        player.z = spawnZ;

        // Notify client to spawn
        socket.emit('teamAssigned', player);

        // Notify others now that they have a team
        socket.broadcast.emit('playerJoined', player);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        delete players[socket.id];
        io.emit('playerLeft', socket.id);
    });

    socket.on('move', (data) => {
        if (players[socket.id]) {
            players[socket.id].x = data.x;
            players[socket.id].y = data.y;
            players[socket.id].z = data.z;
            players[socket.id].rx = data.rx;
            players[socket.id].ry = data.ry;
            players[socket.id].biome = data.biome;
            
            // Broadcast to others (exclude sender for bandwidth? No, socket.broadcast does that)
            socket.broadcast.emit('playerMoved', players[socket.id]);
        }
    });

    socket.on('collectCrystal', (crystalId) => {
        const crystal = crystals.find(c => c.id === crystalId);
        if (crystal && crystal.active) {
            crystal.active = false;
            const player = players[socket.id];
            if (player) {
                scores[player.team]++;
                io.emit('crystalCollected', { 
                    id: crystalId, 
                    team: player.team, 
                    scores: scores 
                });

                // Check Win Condition
                const activeCrystals = crystals.filter(c => c.active).length;
                if (activeCrystals === 0) {
                    // Find winner
                    let winner = 'red';
                    let maxScore = -1;
                    for (const [t, s] of Object.entries(scores)) {
                        if (s > maxScore) {
                            maxScore = s;
                            winner = t;
                        }
                    }
                    io.emit('gameOver', { winner: winner });
                    // Reset game after delay?
                    setTimeout(resetGame, 5000);
                }
            }
        }
    });
});

function resetGame() {
    crystals.forEach(c => c.active = true);
    scores = { red: 0, blue: 0, green: 0, yellow: 0 };
    io.emit('gameReset', { crystals, scores });
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
