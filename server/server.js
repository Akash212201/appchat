const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('node:http')
const cors = require('cors')
const path = require('path')

const app = express();
const PORT = 4500;

const users = [{}];
app.use(cors())

app.get("/", (req, res) => {
    res.send(`<h1>Server is Working</h1>`)
})


const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
        credentials: true
    }
})


io.on("connection", (socket) => {
    console.log("new connection");

    socket.on('joined', ({ user }) => {
        users[socket.id] = user;
        console.log(`${user} has joined`)
        socket.broadcast.emit('userJoined', { user: "Admin", message: `${users[socket.id]} has joined}` })
        socket.broadcast.emit("hello", "world");
        socket.emit('welcome', { user: "Admin", message: `Welcome to the chat, ${users[socket.id]}` })
    })

    socket.on('message', ({ message, id }) => {
        io.emit('sendMessage', { user: users[id], message, id })
    })

    socket.on('disconnect', (e) => {
        socket.broadcast.emit('leave', { user: "Admin", message: "user has left" })
        console.log("user left")
    })

})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})