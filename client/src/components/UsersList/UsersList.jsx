import React from 'react';

const UsersList = ({ users }) => {
    const usersElements = users.map(user => <li>{user.name}</li>);

    return (
        <div className="users-list">
            {usersElements}
        </div>
    )
};

export default UsersList;
