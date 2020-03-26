import websocket from 'websocket';

const serverAddress = 'ws://localhost:1337';

let connection;

const connectToServer = () => {
    connection = new websocket(serverAddress);

    connection.onclose = (event) => {
        connectToServer();
    }
    connection.onmessage = (message) => {

    }

};

const sendMessage = data => {
    connection.send(data);
}

const closeConnection = (reason = '') => {
    connection.close(1000, reason);
}

export {
    connectToServer,
    sendMessage,
    closeConnection
}