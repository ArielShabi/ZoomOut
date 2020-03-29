import React from 'react';
import Message from '../Message';
import './message-list-panel.css';

const MessageListPanel = ({ messages }) => {
    const messagesComponenets = messages.map(
        (message, index) => (<Message key={index} message={message} />)
    );

    return (
        <div className="message-list-panel">
            {messagesComponenets}
        </div>
    )
};

export default MessageListPanel;
