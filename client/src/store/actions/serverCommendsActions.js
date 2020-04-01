import { userActions } from './';

const serverCommendArrived = commend => dispatch => {
    if (commend.userId) {
        dispatch(userActions.editUserInfo({ id: commend.userId }));
    }
};


export default {
    serverCommendArrived
};
