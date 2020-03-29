import { webSocketActions } from '../store/actions';

const host = "ws://localhost:1337/";

const webSocketMiddleware = () => {
    let socket = null;

    const onOpen = store => (event) => {        
        store.dispatch(webSocketActions.connectedWebSocket(event.target.url));
    };

    const onClose = store => () => {
        store.dispatch(webSocketActions.closedWebSocket());
    };

    const onMessage = store => (event) => {
        const payload = event.data;        
        store.dispatch(webSocketActions.dataRecived(payload));
    }

    return store => next => action => {
        switch (action.type) {
            case webSocketActions.types.connect:
                if (socket !== null) {
                    socket.close();
                }

                socket = new WebSocket(host);
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
                socket.send(JSON.stringify({ data: action.payload }));
                break;
            default:
                return next(action);
        }
    };
};

export default webSocketMiddleware();