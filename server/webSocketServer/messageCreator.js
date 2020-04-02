const { editUserInfoMessageType } = require('./messageTypes');

const createMessage = (sendingUser,data ) => (JSON.stringify({
    from: { id: sendingUser.id, name: sendingUser.name },
    data
}));

const createServerMessage = (type, data) => (JSON.stringify({
    type,
    from: { id: 'server' },
    data
}));

const createEditUserInfoMessage = (infoToChange) => createServerMessage(editUserInfoMessageType, infoToChange)

module.exports = {
    createMessage,
    createServerMessage,
    createEditUserInfoMessage
}
