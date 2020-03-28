const createMessage = (data, sendingUser) => ({ data, from: { id: sendingUser.id, name: sendingUser.name } });

module.exports = {
    createMessage
}
