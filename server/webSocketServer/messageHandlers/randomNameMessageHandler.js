const { getRandomNameMessageType } = require('../messageTypes');
const { createEditUserInfoMessage } = require('../messageCreator');
const { getRandomName } = require('../../utils');

const handleMessage = (message, user, userContainer) => {
    if (message.type !== getRandomNameMessageType) {
        return;
    }

    const newName = getRandomName();
    const newInfo = { name: newName };
    userContainer.editUser(user.id, newInfo);
    const editUserMessage = createEditUserInfoMessage(newInfo);
    user.connection.send(editUserMessage);
};

module.exports = handleMessage;
