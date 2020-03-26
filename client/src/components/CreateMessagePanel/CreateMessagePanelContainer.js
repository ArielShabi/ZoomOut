import { connect } from 'react-redux';
import { messageActions } from '../../store/actions';
import CreateMessagePanel from './CreateMessagePanel';

const mapDispatchToProps = {
    addMessages: messageActions.addMessages
}

export default connect(null, mapDispatchToProps)(CreateMessagePanel);
