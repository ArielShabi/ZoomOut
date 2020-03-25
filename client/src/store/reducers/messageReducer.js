import { handleActions } from 'redux-actions';
import { addMessagesAction } from '../actions/messageActions';

const defaultState = [];

const messageReducer = handleActions(
    {
        [addMessagesAction]: (state, action) => ( [...state, ...action.payload ])
    },
    defaultState
);

export default messageReducer;
