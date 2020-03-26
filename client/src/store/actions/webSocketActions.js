import { createAction } from 'redux-actions';

const types = {
    connect: 'WS_CONNECT',
    close: 'WS_CLOSE',
    send: 'WS_SEND'
}

const messageRecived = createAction('MESSAGE_RECIVED');

export default { types, messageRecived };
