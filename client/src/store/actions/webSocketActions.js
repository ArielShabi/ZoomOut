import { createAction } from 'redux-actions';
import { dataParser, webSocketService } from '../../services';
import { serverCommendsActions, messageActions } from './';
import config from '../../config';

const webSocketUrl = config.websocketUrl;

const connectedWebSocket = createAction('WS_CONNECTED');
const closedWebSocket = createAction('WS_CLOSED');

const connectWebSocket = () => dispatch => {
    webSocketService.connectToServer(webSocketUrl);
    dispatch(connectedWebSocket());
};

const sendWebSocket = data => dispatch => {
    const jsonData = JSON.stringify(data);
    webSocketService.send(jsonData);
};

const subscribeToWebSocket = (eventName, callback) => dispatch => {
    webSocketService.subscribeTo(eventName, callback);
};

const closeWebSocket = (reason, code = 1000) => dispatch => {
    webSocketService.close(reason, code);
};

const messageRecived = rawData => dispatch => {
    const message = dataParser.tryParseServerMessageEvent(rawData);

    if (message.from.id === 'server') {
        dispatch(serverCommendsActions.serverCommendArrived(message.data));
        return;
    }

    dispatch(messageActions.userMessageArrived(message));
}

export default {
    subscribeToWebSocket,
    connectWebSocket,
    closeWebSocket,
    sendWebSocket,
    messageRecived,
    connectedWebSocket,
    closedWebSocket
};
