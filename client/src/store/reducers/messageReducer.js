import { handleActions } from 'redux-actions';
import { messageActions } from '../actions';

const defaultState = [];

const messageReducer = handleActions(
    {
        [messageActions.addMessagesAction]: (state, action) => ( [...state, ...action.payload ])
    },
    defaultState
);

export default messageReducer;
