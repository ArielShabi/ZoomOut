const WebSocket = require('ws');
const messageHandlers = require('./messageHandlers');
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

            messageHandlers.handleMessage(parsedMessage, currentUser, users);
        });

        webSocketConnection.on('close', (code, reason) => {
            users.removeUser(userId);
        });

        const userNameMessage = messageCreator.createEditUserInfoMessage({ name: currentUser.name });
        webSocketConnection.send(userNameMessage);
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
