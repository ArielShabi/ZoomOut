import { broadcastMessageType, editUserInfoMessageType } from './messageTypes'

const createBoardcostMessage = data => ({ data, type: broadcastMessageType });
const createSelfShownMessage = data => ({ data, from: { id: 'me', name: 'me' } });
const createEditUserInfoMessage = newInfo => ({ data: newInfo, type: editUserInfoMessageType });

export default {
    createBoardcostMessage,
    createSelfShownMessage,
    createEditUserInfoMessage
};
