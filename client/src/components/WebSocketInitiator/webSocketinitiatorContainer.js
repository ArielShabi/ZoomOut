import { connect } from 'react-redux';
import webSocketActions from '../../store/actions/webSocketActions';
import WebSocketInitiator from './WebSocketInitiator';

const mapDispathToProps = {
    connect: webSocketActions.connectWebSocket,
    subscribeToEvent: webSocketActions.subscribeToWebSocket,
    messageRecived: webSocketActions.messageRecived,
    closed: webSocketActions.closedWebSocket,
    opened: webSocketActions.connectedWebSocket
}

export default connect(null, mapDispathToProps)(WebSocketInitiator);
