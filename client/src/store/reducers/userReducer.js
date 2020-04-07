import { handleActions } from 'redux-actions';
import { userActions } from '../actions';

const defaultState = { otherUsers: [] };

const userReducer = handleActions(
    {
        [userActions.editCurrentUserInfo]: (state, action) => ({ ...state, ...action.payload }),
        [userActions.addOtherUsers]: (state, action) => ({ ...state, otherUsers: [...state.otherUsers, ...action.payload] }),
        [userActions.removeOtherUser]: (state, action) => ({ ...state, otherUsers: state.otherUsers.filter(user => user.id !== action.payload) }),
        [userActions.editOtherUserInfo]: (state, action) =>
            ({ ...state, otherUsers: state.otherUsers.map(user => user.id === action.payload.id ? { ...user, ...action.payload.changed } : user) })
    },
    defaultState
);

export default userReducer;
