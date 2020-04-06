import { editUserInfoMessageType, userJoinedMessageType, userRemovedMessageType, getRandomNameMessageType, otherUserEditedMessageTyped } from '../../common/messageTypes';
import { messageCreator } from '../../services';
import { userActions, webSocketActions } from './';


const serverCommendArrived = commend => dispatch => {
    switch (commend.type) {
        case editUserInfoMessageType: {
            dispatch(userActions.editCurrentUserInfo({ ...commend.data }));
            break;
        }
        case userJoinedMessageType: {
            dispatch(userActions.addOtherUsers(commend.data));
            break;
        }
        case userRemovedMessageType: {
            dispatch(userActions.removeOtherUser(commend.data.id));
            break;
        }
        case otherUserEditedMessageTyped: {
            dispatch(userActions.editOtherUserInfo(commend.data));
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
