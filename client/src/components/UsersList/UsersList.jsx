import React from 'react';

const UsersList = ({ users }) => {
    const usersElements = users.map(user => <span>{user.name}</span>);

    return (
        <div className="users-list">
            {usersElements}
        </div>
    )
};

export default UsersList;
