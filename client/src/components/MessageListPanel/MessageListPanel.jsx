import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import './message-list-panel.css';

const MessageListPanel = ({ messages }) => {
    const messagesComponents = messages.map(
        (message, index) => (<Message key={index} message={message} />)
    );

    return (
        <div className="message-list-panel">
            {messagesComponents}
        </div>
    )
};

MessageListPanel.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.string,
        from: PropTypes.shape({
            name: PropTypes.string
        })
    })).isRequired
}

export default MessageListPanel;
