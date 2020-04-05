import { createAction } from 'redux-actions';

const editCurrentUserInfo = createAction('EDIT_CURRENT_USER');
const addUsersAction = createAction('ADD_USERS_ACTION');
const removeUserAction = createAction('REMOVE_USER_ACTION');

export default {
    editCurrentUserInfo,
    addUsersAction,
    removeUserAction
};
