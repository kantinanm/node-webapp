const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
var bodyParser = require("body-parser");
const path = require("path");
util = require("./util");
const APP_PORT = 3000;

var app = express();
const server = http.createServer(app);
const io = new Server(server);
const welcomeMsg = "Good morning";

//app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/client", function (req, res) {
  res.sendFile("public/client/form.html", { root: __dirname });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("hi", welcomeMsg);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (data) => {
    console.log("message activated.");
    const packet = JSON.parse(data);
    console.log("Message from client is :" + packet.message);
  });
});

//io.on("message", (data) => {});

app.get("/time", function (req, res) {
  console.log("To day is date :" + new Date().toISOString().slice(0, 10));
  util.getTimeInfo
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).send(err));
});

var port = process.env.PORT || APP_PORT;

/*app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});*/

server.listen(port, () => {
  console.log("listening on *:" + port);
});
