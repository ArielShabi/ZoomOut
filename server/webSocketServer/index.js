const WebSocket = require('ws');
const messageHandlers = require('./messageHandlers');
const createUserContainer = require('./userContainer');
const messageCreator = require('./messageCreator');
const { userJoinedMessageType, userRemovedMessageType } = require('./messageTypes');
const utils = require('../utils');

const startWebSocketServer = (httpServer) => {
    const webSocketServer = new WebSocket.Server({ server: httpServer });
    const userContainer = createUserContainer();

    webSocketServer.on('connection', webSocketConnection => {
        const userId = userContainer.addUser(webSocketConnection);
        const currentUser = userContainer.getUser(userId);

        webSocketConnection.on('message', rawMessage => {
            const parsedMessage = utils.tryParseJson(rawMessage);

            if (!parsedMessage) {
                return;
            }

            messageHandlers.handleMessage(parsedMessage, currentUser, userContainer);
        });

        webSocketConnection.on('close', (code, reason) => {
            userContainer.removeUser(userId);
            const userRemovedMessage = messageCreator.createServerMessage(userRemovedMessageType, { id: userId })
            userContainer.getAllOpenUsers().forEach(user => user.connection.send(userRemovedMessage));
        });

        const userNameMessage = messageCreator.createEditUserInfoMessage({ name: currentUser.name });
        webSocketConnection.send(userNameMessage);

        const { connection, ...infoToShare } = currentUser;
        const newUserJoinedMessage = messageCreator.createServerMessage(userJoinedMessageType, { ...infoToShare })
        userContainer.getAllOpenUsers().forEach(user => user.connection.send(newUserJoinedMessage));
    });

    return webSocketServer;
}

module.exports = {
    startWebSocketServer
};
