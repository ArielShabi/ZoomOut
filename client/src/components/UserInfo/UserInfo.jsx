import React from 'react';
import './user-info.css';

const UserInfo = ({ userName }) => (
    <div className="user-info">
        <span>{userName}</span>
    </div>
);

export default UserInfo;