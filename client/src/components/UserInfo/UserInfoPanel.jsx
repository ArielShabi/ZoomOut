import React from 'react';
import './user-info-panel.css';

const UserInfoPanel = ({ userName }) => (
    <div className="user-info-panel">
        <p className="user-name">
            <span> Your Name:</span>
            <br />
            <span> {userName}</span>
        </p>
    </div>
);

export default UserInfoPanel;