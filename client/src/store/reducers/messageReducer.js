import { handleActions } from 'redux-actions';
import { addMessageAction } from '../actions/messageActions';

const defaultState = { messages: [] };

const messageReducer = handleActions(
    {
        [addMessageAction]: (state, payload) => ({ ...state, messages: [...state.messages, ...payload] })
    },
    defaultState
);

export default messageReducer;