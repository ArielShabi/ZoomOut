import React, { useEffect } from 'react';
import CreateMessagePanel from '../CreateMessagePanel';
import MessageListPanel from '../MessageListPanel';

const ChatWindow = ({ connectWebSocket }) => {
    useEffect(() => {
        connectWebSocket()
    });

    return (
        <div>
            <MessageListPanel />
            <CreateMessagePanel />
        </div>
    )
};

export default ChatWindow;
