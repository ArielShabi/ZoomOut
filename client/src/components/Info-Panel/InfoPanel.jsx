import React from 'react';
import { IconButton,Paper } from '@material-ui/core';
import { Casino } from '@material-ui/icons';
import UsersList from '../UsersList';
import './info-panel.css';

const UserInfoPanel = ({ userName, getRandomName }) => (
    <Paper className="info-panel">
        <UsersList />
        <p className="user-name">
            <span> Your Name:</span>
            <br />
            <span> {userName}</span>
            <IconButton onClick={getRandomName}>
                <Casino />
            </IconButton>
        </p>
    </Paper>
);

export default UserInfoPanel;
