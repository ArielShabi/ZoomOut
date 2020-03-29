const createMessage = (data, sendingUser) => (JSON.stringify({ data, from: { id: sendingUser.id, name: sendingUser.name } }));

const createServerMessage = (data) => (JSON.stringify({ data, from: { id: 'server' } }));

module.exports = {
    createMessage,
    createServerMessage
}
