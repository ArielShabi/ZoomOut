import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CreateMessagePanel from '../CreateMessagePanel';
import MessageListPanel from '../MessageListPanel';

const ChatWindow = ({ connectWebSocket }) => {
    useEffect(() => {
        connectWebSocket();
    });

    return (
        <div>
            <MessageListPanel />
            <CreateMessagePanel />
        </div>
    );
};

ChatWindow.propTypes = {
    connectWebSocket: PropTypes.func.isRequired
};

export default ChatWindow;
