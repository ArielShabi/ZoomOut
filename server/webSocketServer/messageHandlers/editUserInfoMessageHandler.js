const {editUserInfoMessageType} = require('../messageTypes');

const handleMessage = (message, user, userContainer) => {
    if (message.type !== editUserInfoMessageType) {
        return;
    }

    userContainer.editUser(user.id, message.data);
}

module.exports = handleMessage;
