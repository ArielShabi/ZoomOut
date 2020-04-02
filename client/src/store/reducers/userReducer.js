import { handleActions } from 'redux-actions';
import { userActions } from '../actions';

const defaultState = { otherUsers: [] };

const userReducer = handleActions(
    {
        [userActions.editCurrentUserInfo]: (state, action) => ({ ...state, ...action.payload }),
        [userActions.addUserAction]: (state, action) => ({ ...state, otherUsers: [...state.otherUsers, action.payload] })
    },
    defaultState
);

export default userReducer;
