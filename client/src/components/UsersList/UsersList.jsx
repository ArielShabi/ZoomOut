import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import statuses from '../../common/statuses';

const statusToClass = {
    [statuses.online]: 'online-status',
    [statuses.away]: 'away-status'
};

const UsersList = ({ users }) => {
    const usersElements = users.map((user, index) =>
        <ListItem key={index}>
            <ListItemAvatar>
                <Avatar className={statusToClass[user.status]} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
        </ListItem>
    );

    return (
        <List className="users-list">
            {usersElements}
        </List>
    )
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        status: PropTypes.string
    })).isRequired
};

export default UsersList;
