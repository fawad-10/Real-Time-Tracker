const express = require("express");
const app = express();

//defining path
const path = require("path");

//Boiler Plate for Socket.Io

const socketio = require("socket.io");
const http = require("http");
const { createConnection } = require("net");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Serve static files from the "public" directory
app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    io.emit("recieve-location", { id: socket.id, ...data });
  });
  socket.on("disconnected", () => {
    socket.emit("user-disconnected", socket.id);
  });
  console.log("a user connected");
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000);
