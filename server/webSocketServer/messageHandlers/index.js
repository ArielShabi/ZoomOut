const broadcastMessageHandler = require('./broadcastMessageHandler');
const editUserInfoMessageHandler = require('./editUserInfoMessageHandler');
const randomNameMessageHandler = require('./randomNameMessageHandler');

const messageHandlers = [
    broadcastMessageHandler,
    editUserInfoMessageHandler,
    randomNameMessageHandler
]

const handleMessage = (message, user, userContainer) => {
    messageHandlers.forEach(handler => handler(message, user, userContainer));
}


module.exports = { handleMessage, messageHandlers };
