import { createAction } from 'redux-actions';
import { webSocketActions } from './';

const addMessages = createAction('ADD_MESSAGE');

const sendMessage = (messageText) => (dispatch) => {
    dispatch(webSocketActions.sendWebSocket(messageText));
    const message = { data: messageText, from: { id: 'me', name: 'me' } }
    dispatch(addMessages([message]));
};

export default {
    addMessages,
    sendMessage
};
