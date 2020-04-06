import React from 'react';
import UserInfoPanel from '../Info-Panel';
import CreateMessagePanel from '../CreateMessagePanel';
import MessageListPanel from '../MessageListPanel';
import './chat-window.css';

const ChatWindow = () => (
    <div className="chat-window">
        <UserInfoPanel />
        <MessageListPanel />
        <CreateMessagePanel />
    </div>
);


export default ChatWindow;
