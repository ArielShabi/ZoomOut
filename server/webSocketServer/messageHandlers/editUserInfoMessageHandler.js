const editUserInfoMessageType = 'EDIT_USER_INFO';

const handleMessage = (message, user, userContainer) => {
    if (message.type !== editUserInfoMessageType) {
        return;
    }

    userContainer.editUser(user.id, message.data);
}

module.exports = handleMessage;
