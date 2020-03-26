import { createAction } from 'redux-actions';
import { webSocketActions } from './';

const addMessagesAction = createAction('ADD_MESSAGE');

const sendMessages = (messages) => (dispatch) => {
    dispatch(webSocketActions.sendWebSocket(messages));
    dispatch(addMessagesAction(messages));
};

export default { sendMessages, addMessagesAction };
