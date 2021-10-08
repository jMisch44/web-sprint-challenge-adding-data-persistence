const express = require('express');
const resourcesRouter = require('./resource/router.js');
const projectsRouter = require('./project/router.js');
const server = express();

server.use(express.json());
server.use('/api/resources/', resourcesRouter);
server.use('/api/projects/', projectsRouter);

server.use(errorHandling);

function errorHandling(err, req, res, next) { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
}

module.exports = server;
