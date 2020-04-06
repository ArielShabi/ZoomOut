import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import statuses from '../../common/statuses';

const statusToClass = {}
statusToClass[statuses.online] = 'online-status';
statusToClass[statuses.away] = 'away-status';

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

export default UsersList;
