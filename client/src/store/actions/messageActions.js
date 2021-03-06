import { createAction } from 'redux-actions';
import messageCreator from '../../services/messageCreator';
import { webSocketActions } from './';

const addMessages = createAction('ADD_MESSAGE');

const sendMessage = messageText => dispatch => {
    const messageToServer = messageCreator.createBoardcostMessage(messageText);
    dispatch(webSocketActions.sendWebSocket(messageToServer));
    const message = messageCreator.createSelfShownMessage(messageText);
    dispatch(addMessages([message]));
};

const userMessageArrived = message => dispatch => {
    dispatch(addMessages([message]));
}

export default {
    addMessages,
    sendMessage,
    userMessageArrived
};
