import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const UsersList = ({ users }) => {
    const usersElements = users.map(user =>
        <ListItem>
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
