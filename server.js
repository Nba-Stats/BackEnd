const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Server running!")
})

module.exports = server;