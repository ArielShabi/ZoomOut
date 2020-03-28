import { createAction } from 'redux-actions';

const types = {
    connect: 'WS_CONNECT',
    close: 'WS_CLOSE',
    send: 'WS_SEND',
    received: 'WS_DATA_RECEIVED'
}

const connectWebSocket = createAction(types.connect);
const closeWebSocket = createAction(types.close);
const sendWebSocket = createAction(types.send);
const dataRecived = createAction(types.received);
const connectedWebSocket = createAction('WS_CONNECTED');
const closedWebSocket = createAction('WS_CLOSED');


export default {
    types,
    connectWebSocket,
    closeWebSocket,
    sendWebSocket,
    dataRecived,
    connectedWebSocket,
    closedWebSocket
};
