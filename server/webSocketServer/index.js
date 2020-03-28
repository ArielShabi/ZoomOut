const WebSocket = require('ws');
const userHolder = require('./userHolder');
const messageCreator = require('./messageCreator');

const startWebSocketServer = (httpServer) => {

    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const users = userHolder();

    webSocketServer.on('connection', function connection(webSocketConnection) {
        const userId = users.addUser(webSocketConnection);
        const user = users.getAllOpenUsers(userId);

        webSocketConnection.on('message', userMessage => {
            const messageToSend = messageCreator.createMessage(userMessage.data, user);
            users.getAllOpenUsers(userId).forEach(user => user.connection.send(messageToSend));
        });

        webSocketConnection.on('close', (code, reason) => {
            users.removeUser(userId);
        });
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
