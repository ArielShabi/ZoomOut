import { editUserInfoMessageType } from '../../common/messageTypes';
import { userActions } from './';

const serverCommendArrived = commend => dispatch => {
    switch (commend.type) {
        case editUserInfoMessageType: {
            dispatch(userActions.editUserInfo({ ...commend.data }));
            break;
        }
        default: break;
    }
};


export default {
    serverCommendArrived
};
