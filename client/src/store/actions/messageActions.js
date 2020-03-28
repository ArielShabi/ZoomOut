import { createAction } from 'redux-actions';
import { webSocketActions } from './';

const addMessages = createAction('ADD_MESSAGE');

const sendMessage = (message) => (dispatch) => {
    dispatch(webSocketActions.sendWebSocket(message));
    dispatch(addMessages(message));
};

export default {
    addMessages,
    sendMessage
};
