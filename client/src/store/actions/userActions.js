import { createAction } from 'redux-actions';

const editCurrentUserInfo = createAction('EDIT_CURRENT_USER');
const addUserAction = createAction('ADD_USER_ACTION');
const removeUserAction = createAction('REMOVE_USER_ACTION');

export default {
    editCurrentUserInfo,
    addUserAction,
    removeUserAction
};
