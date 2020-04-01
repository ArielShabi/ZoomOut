import { createAction } from 'redux-actions';
import { webSocketActions } from './';

const addMessages = createAction('ADD_MESSAGE');

const sendMessage = messageText => dispatch => {
    const messageToServer = { data: messageText }
    dispatch(webSocketActions.sendWebSocket(messageToServer));
    const message = { ...messageToServer, from: { id: 'me', name: 'me' } }
    dispatch(addMessages([message]));
};

const userMessageArrived = message => dispatch => {
    console.log(message)
    dispatch(addMessages([message]));
}

export default {
    addMessages,
    sendMessage,
    userMessageArrived
};
