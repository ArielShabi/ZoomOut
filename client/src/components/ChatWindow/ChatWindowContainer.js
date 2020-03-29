import { connect } from 'react-redux';
import { webSocketActions } from '../../store/actions';
import ChatWindow from './ChatWindow';

const mapDispatchToProps = {
    connectWebSocket: webSocketActions.connectWebSocket
};

export default connect(null, mapDispatchToProps)(ChatWindow);
