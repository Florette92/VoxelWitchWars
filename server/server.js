const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Voxel Witch Wars Lobby Server');
});

// Lobby State
// Map<RoomCode, { hostPeerId: string, name: string, players: number }>
const lobbies = new Map();

function generateRoomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

io.on('connection', (socket) => {
    console.log('Lobby User connected:', socket.id);

    // Send current lobbies to the new user
    socket.emit('lobbyList', Array.from(lobbies.entries()));

    socket.on('createLobby', (data) => {
        // data: { hostPeerId: string, name: string }
        const code = generateRoomCode();
        const lobby = {
            code: code,
            hostPeerId: data.hostPeerId,
            name: data.name || `Game ${code}`,
            players: 1
        };
        
        lobbies.set(code, lobby);
        socket.join(code); // Join a socket room for this lobby
        
        // Store the code on the socket so we can remove it on disconnect
        socket.lobbyCode = code;

        socket.emit('lobbyCreated', lobby);
        io.emit('lobbyList', Array.from(lobbies.entries())); // Broadcast update
        console.log(`Lobby created: ${code} by ${data.hostPeerId}`);
    });

    socket.on('joinLobby', (code) => {
        const lobby = lobbies.get(code);
        if (lobby) {
            socket.emit('lobbyJoined', lobby);
        } else {
            socket.emit('error', 'Lobby not found');
        }
    });

    socket.on('disconnect', () => {
        if (socket.lobbyCode) {
            console.log(`Host disconnected, removing lobby ${socket.lobbyCode}`);
            lobbies.delete(socket.lobbyCode);
            io.emit('lobbyList', Array.from(lobbies.entries()));
        }
    });
});

server.listen(PORT, () => {
  console.log(`Lobby Server running on port ${PORT}`);
});
