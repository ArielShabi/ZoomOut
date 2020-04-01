const messageCreator = require('./messageCreator');

const broadcastMessageType = 'BROADCAST';

const handleMessage = (message, user, userContainer) => {
    if (message.type !== broadcastMessageType) {
        return;
    }

    const messageToSend = messageCreator.createMessage(parsedMessage.data, currentUser);

    userContainer.getAllOpenUsers().forEach(openUser => {
        if (openUser.id !== user.id) {
            openUser.connection.send(messageToSend);
        }
    });
};

module.exports = handleMessage;
