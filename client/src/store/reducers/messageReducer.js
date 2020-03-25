import { handleActions } from 'redux-actions';
import { addMessageAction } from '../actions/messageActions';

const defaultState = [123];

const messageReducer = handleActions(
    {
        [addMessageAction]: (state, payload) => ({ ...state, ...payload })
    },
    defaultState
);

export default messageReducer;
