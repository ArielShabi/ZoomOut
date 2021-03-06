import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './create-message-panel.css';

const CreateMessagePanel = ({ sendMessage }) => {
    const [userText, setUserText] = useState('');

    const onSendClicked = () => {
        if (userText.length > 0) {
            sendMessage(userText);
            setUserText('');
        }
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onSendClicked();
        }
    }

    return (
        <div className="create-message-panel">
            <input type="text" value={userText} onChange={e => setUserText(e.target.value)} onKeyPress={e => onKeyPress(e)} />
            <button onClick={onSendClicked}>שלח</button>
        </div>
    )
};

CreateMessagePanel.propTypes = {
    sendMessage: PropTypes.func.isRequired
};

export default CreateMessagePanel;
