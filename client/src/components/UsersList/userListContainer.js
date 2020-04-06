import { connect } from 'react-redux';
import { otherUsersSelector } from '../../store/selectors/userSelector';
import UsersList from './UsersList';
import './users-list.css';

const mapStateToProps = state => ({
    users: otherUsersSelector(state)
});

export default connect(mapStateToProps)(UsersList);
