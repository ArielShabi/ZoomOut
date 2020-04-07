import * as messageTypes from '../../common/messageTypes';
import { messageCreator } from '../../services';
import { userActions, webSocketActions } from '.';


const serverCommendArrived = commend => dispatch => {
    switch (commend.type) {
        case messageTypes.editUserInfoMessageType: {
            dispatch(userActions.editCurrentUserInfo({ ...commend.data }));
            break;
        }
        case messageTypes.userJoinedMessageType: {
            dispatch(userActions.addOtherUsers(commend.data));
            break;
        }
        case messageTypes.userRemovedMessageType: {
            dispatch(userActions.removeOtherUser(commend.data.id));
            break;
        }
        case messageTypes.otherUserEditedMessageTyped: {
            dispatch(userActions.editOtherUserInfo(commend.data));
            break;
        }
        default: break;
    }
};

const getRandomName = () => dispatch => {
    const messageToSend = messageCreator.createTypeOnlyMessage(messageTypes.getRandomNameMessageType);
    dispatch(webSocketActions.sendWebSocket(messageToSend));
}

export default {
    serverCommendArrived,
    getRandomName
};
