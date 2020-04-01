import { connect } from 'react-redux';
import serverCommendsActions from '../../store/actions/serverCommendsActions';
import { userNameSelector } from '../../store/selectors/userSelector';
import UserInfoPanel from './UserInfoPanel';

const mapStateToProps = state => ({
    userName: userNameSelector(state)
});

const mapDispatchToProps = {
    getRandomName: serverCommendsActions.getRandomName
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoPanel);
