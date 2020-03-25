import { connect } from 'react-redux';
import { addMessages } from '../../store/actions/messageActions';
import CreateMessagePanel from './CreateMessagePanel';

const mapDispatchToProps = dispatch => ({
    addMessages: messages => dispatch(addMessages(messages))
})

export default connect(null, mapDispatchToProps)(CreateMessagePanel);
