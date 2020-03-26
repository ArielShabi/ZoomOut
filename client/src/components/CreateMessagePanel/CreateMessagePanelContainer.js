import { connect } from 'react-redux';
import { messageActions } from '../../store/actions';
import CreateMessagePanel from './CreateMessagePanel';

const mapDispatchToProps = {
    sendMessages: messageActions.sendMessages
}

export default connect(null, mapDispatchToProps)(CreateMessagePanel);
