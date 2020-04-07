const { getRandomNameMessageType } = require('../messageTypes');
const { createEditUserInfoMessage, createOtherUserEditedInfoMessage } = require('../messageCreator');
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

    const newNameMessage = createOtherUserEditedInfoMessage(user.id, { name: newName });

    userContainer.getAllOpenUsers(user.id).forEach(otherUser => {
        otherUser.connection.send(newNameMessage);
    });
};

module.exports = handleMessage;
