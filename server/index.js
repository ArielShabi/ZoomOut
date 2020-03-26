const express = require('express');
const WebSocket = require('ws');
const { createServer } = require('http');

const serverPort = 1337;

const app = express();
const httpServer = createServer({ app });

const webSocketServer = new WebSocket.Server({ server: httpServer });

webSocketServer.on('connection', function connection(ws) {
    console.log(`New connection ${ws}`);
    ws.on('message', function incoming(data) {
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

httpServer.listen(serverPort, () => {
    console.log(`Listening on http://localhost:${serverPort}`);
});
