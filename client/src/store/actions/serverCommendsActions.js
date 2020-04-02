import { editUserInfoMessageType, userJoinedMessageType, getRandomNameMessageType } from '../../common/messageTypes';
import { messageCreator } from '../../services';
import { userActions, webSocketActions } from './';


const serverCommendArrived = commend => dispatch => {
    switch (commend.type) {
        case editUserInfoMessageType: {
            dispatch(userActions.editCurrentUserInfo({ ...commend.data }));
            break;
        }
        case userJoinedMessageType: {
            dispatch(userActions.addUserAction(commend.data));
            break;
        }
        default: break;
    }
};

const getRandomName = () => dispatch => {
    const messageToSend = messageCreator.createtypeOnlyMessage(getRandomNameMessageType);
    dispatch(webSocketActions.sendWebSocket(messageToSend));
}

export default {
    serverCommendArrived,
    getRandomName
};
