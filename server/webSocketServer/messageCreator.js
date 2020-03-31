const createMessage = (data, sendingUser) => (JSON.stringify({ from: { id: sendingUser.id, name: sendingUser.name }, data }));

const createServerMessage = (data) => (JSON.stringify({ from: { id: 'server' }, data }));

module.exports = {
    createMessage,
    createServerMessage
}
