import React from 'react';
import CreateMessagePanel from './CreateMessagePanel';
import MessageListPanel from './MessageListPanel';

const ChatWindow = () => (
    <div>
        <MessageListPanel />
        <CreateMessagePanel />
    </div>
)

export default ChatWindow;