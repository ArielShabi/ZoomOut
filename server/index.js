const express = require('express');
const webSocket = require('websocket').server;
const { createServer } = require('http');

const serverPort = 1337;

const app = express();
const httpServer = createServer({ app });

const webSocketServer = new webSocket({ httpServer });

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

server.listen(serverPort, () => {
    console.log(`Listening on http://localhost:${serverPort}`);
});
