const { broadcastMessageType } = require('../messageTypes')
const { createMessage } = require('../messageCreator');

const handleMessage = (message, user, userContainer) => {
    if (message.type !== broadcastMessageType) {
        return;
    }

    const messageToSend = createMessage(user, message.data);

    userContainer.getAllOpenUsers().forEach(openUser => {
        if (openUser.id !== user.id) {
            openUser.connection.send(messageToSend);
        }
    });
};

module.exports = handleMessage;
