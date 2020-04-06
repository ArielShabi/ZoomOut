import { createAction } from 'redux-actions';

const editCurrentUserInfo = createAction('EDIT_CURRENT_USER');
const addOtherUsers = createAction('ADD_OTHER_USERS');
const removeOtherUser = createAction('REMOVE_OTHER_USER');
const editOtherUserInfo = createAction('EDIT_OTHER_USER');

export default {
    editCurrentUserInfo,
    addOtherUsers,
    removeOtherUser,
    editOtherUserInfo
};
