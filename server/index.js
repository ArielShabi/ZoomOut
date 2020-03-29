const express = require('express');
const { createServer } = require('http');
const webSocket = require('./webSocketServer');

const serverPort = 1337;

const app = express();
const httpServer = createServer({ app });
webSocket.startWebSocketServer(httpServer);

httpServer.listen(serverPort, () => {
    console.log(`Listening on http://localhost:${serverPort}`);
});
