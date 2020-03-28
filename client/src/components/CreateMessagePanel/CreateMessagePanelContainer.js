import { connect } from 'react-redux';
import { messageActions } from '../../store/actions';
import CreateMessagePanel from './CreateMessagePanel';

const mapDispatchToProps = {
    sendMessage: messageActions.sendMessage
}

export default connect(null, mapDispatchToProps)(CreateMessagePanel);
