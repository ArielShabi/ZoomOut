import React from 'react';
import './user-info-panel.css';

const UserInfoPanel = ({ userName }) => (
    <div className="user-info-panel">
        <span>{userName}</span>
    </div>
);

export default UserInfoPanel;