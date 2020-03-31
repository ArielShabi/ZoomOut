import { handleActions } from 'redux-actions';
import { userActions } from '../actions';

const defaultState = {};

const userReducer = handleActions(
    {
        [userActions.editUserInfo]: (state, action) => ( {...state, ...action.payload })
    },
    defaultState
);

export default userReducer;
