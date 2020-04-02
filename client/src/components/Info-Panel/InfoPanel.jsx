import React from 'react';
import { IconButton } from '@material-ui/core';
import { Casino } from '@material-ui/icons';
import './info-panel.css';


const UserInfoPanel = ({ userName, getRandomName }) => (
    <div className="info-panel">
        <p className="user-name">
            <span> Your Name:</span>
            <br />
            <span> {userName}</span>
            <IconButton onClick={getRandomName}>
                <Casino />
            </IconButton>
        </p>
    </div>
);

export default UserInfoPanel;
