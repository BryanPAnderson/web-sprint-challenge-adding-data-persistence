const express = require("express");
const router = require("");
const server = express();
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json())
server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.use((req, res, next) => {
    res.json({
        message: "welcome"
    })
    next()
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
    next()
})

module.exports = server;
