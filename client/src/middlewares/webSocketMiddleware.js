import { webSocketActions } from '../store/actions';

const webSocketMiddleware = () => {
    let socket = null;

    const onOpen = store => (event) => {
        console.log('websocket open', event.target.url);
        store.dispatch(webSocketActions.wsConnected(event.target.url));
    };

    const onClose = store => () => {
        store.dispatch(webSocketActions.wsDisconnected());
    };

    const onMessage = store => (event) => {
        const payload = JSON.parse(event.data);
        console.log('receiving server message');

        store.dispatch(webSocketActions.messageRecived(payload));
    }

    return store => next => action => {
        switch (action) {
            case webSocketActions.types.connect:
                if (socket !== null) {
                    socket.close();
                }

                socket = new WebSocket(action.payload);

                socket.onmessage = onMessage(store);
                socket.onclose = onClose(store);
                socket.onopen = onOpen(store);
                break;
            case webSocketActions.types.close:
                if (socket !== null) {
                    socket.close();
                }

                socket = null;
                console.log('websocket closed');
                break;
            case webSocketActions.types.send:
                console.log('sending a message', action);
                socket.send(JSON.stringify(action.payload));
                break;
            default:
                return next(action);
        }
    };
};

export default webSocketMiddleware();