const createMessage = (data, sendingUser) => ({ data, from: { id: sendingUser.id, name: sendingUser.name } });

const createServerMessage = (data) => ({ data, from: { id: 'server' } });

module.exports = {
    createMessage,
    createServerMessage
}
