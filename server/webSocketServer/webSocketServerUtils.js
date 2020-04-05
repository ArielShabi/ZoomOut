const messageCreator = require('./messageCreator');
const { usersJoinedMessageType } = require('./messageTypes');

const getPublicInfoFromUsers = (users) => users.map(user => {
    const { connection, ...infoToShare } = user;
    return { ...infoToShare };
});

const sendInitialData = (newUser, userContainer) => {
    const userNameMessage = messageCreator.createEditUserInfoMessage({ name: newUser.name });
    newUser.connection.send(userNameMessage);

    const otherUsers = userContainer.getAllOpenUsers(newUser.id);
    const otherUserPublicInfo = getPublicInfoFromUsers(otherUsers);
    const allOtherUsersMessage = messageCreator.createServerMessage(usersJoinedMessageType, otherUserPublicInfo);
    newUser.connection.send(allOtherUsersMessage);
};

const informNewUserJoined = (newUser, userContainer) => {
    const otherUsers = userContainer.getAllOpenUsers(newUser.id);
    const newUserPublicInfo = getPublicInfoFromUsers([newUser])[0];
    const newUserJoinedMessage = messageCreator.createServerMessage(usersJoinedMessageType, [{ ...newUserPublicInfo }]);

    otherUsers.forEach(user => user.connection.send(newUserJoinedMessage));
};

module.exports = {
    informNewUserJoined,
    sendInitialData
};
