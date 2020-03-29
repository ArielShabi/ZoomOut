import { webSocketActions, messageActions, userActions } from '../store/actions';

const messageMiddleware = store => next => action => {
    if (action.type === webSocketActions.types.received) {
        const parsedMessage = JSON.parse(action.payload);
        const userId = store.getState().user.id;
        const actionToDispatch = getActionToDispatch(parsedMessage, userId);
        if (actionToDispatch) {
            return store.dispatch(actionToDispatch);
        }
    }
    return next(action);
};

const getActionToDispatch = (parsedMessage, userId) => {
    switch (parsedMessage.from.id) {
        case 'server':
            return parseServerMessage(parsedMessage);
        case userId:
            return;
        default:
            return messageActions.addMessages([parsedMessage]);
    }
};

const parseServerMessage = serverMessage => {
    const messageBody = serverMessage.data;

    if (messageBody.userId) {
        return userActions.editUserInfo({ id: messageBody.userId });
    }
}

export default messageMiddleware;