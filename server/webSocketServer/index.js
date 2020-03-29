const WebSocket = require('ws');
const userHolder = require('./userHolder');
const messageCreator = require('./messageCreator');

const startWebSocketServer = (httpServer) => {

    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const users = userHolder();

    webSocketServer.on('connection', webSocketConnection => {
        const userId = users.addUser(webSocketConnection);
        const user = users.getUser(userId);

        webSocketConnection.on('message', rawMessage => {
            const parsedMessage = JSON.parse(rawMessage);
            const messageToSend = messageCreator.createMessage(parsedMessage.data, user);
            users.getAllOpenUsers(userId).forEach(user => user.connection.send(messageToSend));
        });

        webSocketConnection.on('close', (code, reason) => {
            users.removeUser(userId);
        });

        const userIdMessage = messageCreator.createServerMessage({ userId });
        webSocketConnection.send(userIdMessage);
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
