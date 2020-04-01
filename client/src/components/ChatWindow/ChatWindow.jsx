import React from 'react';
import UserInfo from '../UserInfo/';
import CreateMessagePanel from '../CreateMessagePanel';
import MessageListPanel from '../MessageListPanel';
import './chat-window.css';

const ChatWindow = () => (
    <div>
        <div className="main-chat-panel">
            <UserInfo />
            <MessageListPanel />
        </div>
        <CreateMessagePanel />
    </div>
);


export default ChatWindow;
