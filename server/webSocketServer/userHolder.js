const WebSocket = require('ws');
const uniqid = require('uniqid');

const userHolder = () => {
    let users = [];

    const addUser = connection => {
        const id = uniqid();
        users.push({
            id,
            connection
        })
        return id;
    };

    const removeUser = id => {
        users = users.filter(user => user.id !== id);
    }

    const editUser = (id, newUserData) => {
        const userToEdit = users.find(user => user.id === id);

        userToEdit = { ...userToEdit, ...newUserData };
    }

    const getUser = (id) => users.find(user => user.id === id);

    const getAllOpenUsers = () => users.filter(user => user.connection.readyState == WebSocket.OPEN);

    return {
        addUser,
        removeUser,
        editUser,
        getAllOpenUsers

    };
}

module.exports = userHolder;