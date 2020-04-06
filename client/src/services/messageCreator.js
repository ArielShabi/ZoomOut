import { broadcastMessageType, editUserInfoMessageType } from '../common/messageTypes'

const createTypeOnlyMessage = type => ({ type });
const createBoardcostMessage = data => ({ data, type: broadcastMessageType });
const createSelfShownMessage = data => ({ data, from: { id: 'me', name: 'me' } });
const createEditUserInfoMessage = newInfo => ({ data: newInfo, type: editUserInfoMessageType });

export default {
    createTypeOnlyMessage,
    createBoardcostMessage,
    createSelfShownMessage,
    createEditUserInfoMessage
};
