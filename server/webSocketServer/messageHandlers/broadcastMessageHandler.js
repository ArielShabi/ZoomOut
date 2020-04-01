const {broadcastMessageType} = require('./messageTypes')
const messageCreator = require('../messageCreator');

const handleMessage = (message, user, userContainer) => {
    if (message.type !== broadcastMessageType) {
        return;
    }

    const messageToSend = messageCreator.createMessage(message.data, user);

    userContainer.getAllOpenUsers().forEach(openUser => {
        if (openUser.id !== user.id) {
            openUser.connection.send(messageToSend);
        }
    });
};

module.exports = handleMessage;
