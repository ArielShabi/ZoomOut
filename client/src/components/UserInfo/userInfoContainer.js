import { connect } from 'react-redux';
import { userName } from '../../store/selectors/userSelector';
import UserInfo from './UserInfo';

const mapStateToProps = {
    userName
};

export default connect(mapStateToProps)(UserInfo);
