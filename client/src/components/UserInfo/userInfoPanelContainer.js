import { connect } from 'react-redux';
import { userNameSelector } from '../../store/selectors/userSelector';
import UserInfoPanel from './UserInfoPanel';

const mapStateToProps = state => ({
    userName: userNameSelector(state)
});

export default connect(mapStateToProps)(UserInfoPanel);