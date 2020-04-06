import { connect } from 'react-redux';
import { otherUsersSelect } from '../../store/selectors/userSelector';
import UsersList from './UsersList';
import './users-list.css';

const mapStateToProps = state => ({
    users: otherUsersSelect(state)
});

export default connect(mapStateToProps)(UsersList);
