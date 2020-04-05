const WebSocket = require('ws');
const statusTimer = require('./UserStatus/statusTimer');
const messageHandlers = require('./messageHandlers');
const createUserContainer = require('./userContainer');
const messageCreator = require('./messageCreator');
const { userRemovedMessageType } = require('./messageTypes');
const webSocketServerUtils = require('./webSocketServerUtils');
const utils = require('../utils');

const startWebSocketServer = (httpServer) => {
    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const userContainer = createUserContainer();
    const statusTimerInitator = statusTimer(userContainer, 3000);

    webSocketServer.on('connection', (webSocketConnection, req) => {
        const userId = userContainer.addUser(webSocketConnection);
        let currentUser = userContainer.getUser(userId);

        webSocketConnection.on('message', rawMessage => {
            const parsedMessage = utils.tryParseJson(rawMessage);

            if (!parsedMessage) {
                return;
            }

            messageHandlers.handleMessage(parsedMessage, userId, userContainer);
        });

        webSocketConnection.on('close', (code, reason) => {
            currentUser.statusTimer.stop();
            userContainer.removeUser(userId);
            const userRemovedMessage = messageCreator.createServerMessage(userRemovedMessageType, { id: userId })
            userContainer.getAllOpenUsers().forEach(user => user.connection.send(userRemovedMessage));
        });

        currentUser = statusTimerInitator.initateStatusTimer(currentUser);
        currentUser.statusTimer.start();
        webSocketServerUtils.informNewUserJoined(currentUser, userContainer);
        webSocketServerUtils.sendInitialData(currentUser, userContainer);
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
