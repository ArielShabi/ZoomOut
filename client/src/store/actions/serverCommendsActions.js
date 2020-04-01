import { editUserInfoMessageType, getRandomNameMessageType } from '../../common/messageTypes';
import { messageCreator } from '../../services';
import { userActions, webSocketActions } from './';


const serverCommendArrived = commend => dispatch => {
    switch (commend.type) {
        case editUserInfoMessageType: {
            dispatch(userActions.editUserInfo({ ...commend.data }));
            break;
        }
        default: break;
    }
};

const getRandomName = () => () => {
    const messageToSend = messageCreator.createtypeOnlyMessage(getRandomNameMessageType);
    webSocketActions.sendWebSocket(messageToSend);
}

export default {
    serverCommendArrived,
    getRandomName
};
