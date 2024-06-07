const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const app = express();

const frontDirectory = path.join(__dirname, '../front');

app.use(express.static(frontDirectory));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle socket events here

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});