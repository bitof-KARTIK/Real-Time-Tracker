const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", function (socket) {
    console.log(`Client connected: ${socket.id}`);

    socket.on("send-location", function (data) {
        console.log(`Received send-location from ${socket.id}:`, data);
        io.emit("received-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function() {
        console.log(`Client disconnected: ${socket.id}`);
        io.emit("user-disconnected", socket.id);
    });
});


app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
