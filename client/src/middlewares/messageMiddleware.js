import { webSocketActions, messageActions } from '../store/actions';

const messageMiddleware = store => next => action => {
    if (action.type === webSocketActions.types.received) {
        const parsedMessage = JSON.parse(action.payload);
        return store.dispatch(messageActions.addMessages(parsedMessage))
    }
    return next(action);
};

export default messageMiddleware;