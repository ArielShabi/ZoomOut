const broadcastMessageHandler = require('./broadcastMessageHandler');
const editUserInfoMessageHandler = require('./editUserInfoMessageHandler');

const messageHandlers = [
    broadcastMessageHandler,
    editUserInfoMessageHandler
]

const handleMessage = (message, user, userContainer) => {
    messageHandlers.forEach(handler => handler.handleMessage(message, user, userContainer));
}


module.exports = { handleMessage, messageHandlers }
