import { connect } from 'react-redux';
import { userNameSelector } from '../../store/selectors/userSelector';
import UserInfo from './UserInfo';

const mapStateToProps = state => ({
    userName: userNameSelector(state)
});

export default connect(mapStateToProps)(UserInfo);
