const broadcastMessageHandler = require('./broadcastMessageHandler');
const editUserInfoMessageHandler = require('./editUserInfoMessageHandler');
const randomNameMessageHandler = require('./randomNameMessageHandler');
const statusChangerMessageHandler = require('./statusChangerMessageHandler');

const messageHandlers = [
    broadcastMessageHandler,
    editUserInfoMessageHandler,
    randomNameMessageHandler,
    statusChangerMessageHandler
]

const handleMessage = (message, userId, userContainer) => {
    const user = userContainer.getUser(userId);
    messageHandlers.forEach(handler => handler(message, user, userContainer));
}


module.exports = { handleMessage, messageHandlers };
