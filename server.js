const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
    let username = "";

    socket.on("hi", (user) => {
        console.log(`${user} joined`);
        socket.broadcast.emit("hi", user);
        username = user;
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("bye", username);
    });

    socket.on("msg", (txt, user) => {
        const msg = txt.toLowerCase().slice(0, 301);
        console.log(`${user} wrote: ${msg}`);
        socket.broadcast.emit("msg", msg, user);
    });
});

server.listen(process.env.PORT || 3000);
