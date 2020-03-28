const WebSocket = require('ws');
const userHolder = require('./userHolder');

const startWebSocketServer = (httpServer) => {

    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const users = userHolder();

    webSocketServer.on('connection', function connection(webSocketConnection) {
        const userId = users.addUser(webSocketConnection);

        webSocketConnection.on('message', function incoming(data) {
            webSocketServer.clients.forEach(client => {
                users.getAllOpenUsers(userId).
                    forEach(user => user.connection.send(data));
            });
        });

        webSocketConnection.on('close', (code, reason) => {
            console.log(userId);
            users.removeUser(userId);
        });
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
