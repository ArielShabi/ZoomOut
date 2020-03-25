import { connenct } from 'react-redux';
import { messagesSelector } from '../../store/selectors/messageSelectors';
import MessageListPanel from './MessageListPanel';

const mapStateToProps = state => ({
    messages: messagesSelector(state)
});

export default connenct(mapStateToProps)(MessageListPanel);
