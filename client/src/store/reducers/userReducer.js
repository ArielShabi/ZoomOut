import { handleActions } from 'redux-actions';
import { userActions } from '../actions';

const defaultState = { otherUsers: [] };

const userReducer = handleActions(
    {
        [userActions.editCurrentUserInfo]: (state, action) => ({ ...state, ...action.payload }),
        [userActions.addUsersAction]: (state, action) => ({ ...state, otherUsers: [...state.otherUsers, ...action.payload] }),
        [userActions.removeUserAction]: (state, action) => ({ ...state, otherUsers: state.otherUsers.filter(user => user.id !== action.payload) })
    },
    defaultState
);

export default userReducer;
