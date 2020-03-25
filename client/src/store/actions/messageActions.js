import { createAction } from 'redux-actions';

const addMessagesAction = createAction('ADD_MESSAGE');

const addMessages = messages => (addMessagesAction(messages));


export { addMessages, addMessagesAction };
