const WebSocket = require('ws');
const userContainer = require('./userContainer');
const messageCreator = require('./messageCreator');
const utils = require('../utils');

const startWebSocketServer = (httpServer) => {

    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const users = userContainer();

    webSocketServer.on('connection', webSocketConnection => {
        const userId = users.addUser(webSocketConnection);
        const currentUser = users.getUser(userId);

        webSocketConnection.on('message', rawMessage => {
            const parsedMessage = utils.tryParseJson(rawMessage);
            
            if (!parsedMessage) {
                return;
            }

            const messageToSend = messageCreator.createMessage(parsedMessage.data, currentUser);
            users.getAllOpenUsers().forEach(user => {
                if (user.id !== userId) {
                    user.connection.send(messageToSend);
                }
            });
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
