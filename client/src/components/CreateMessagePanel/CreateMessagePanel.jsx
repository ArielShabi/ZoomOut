import React, { useState } from 'react';

const CreateMessagePanel = ({ sendMessage }) => {
    const [userText, setUserText] = useState('');

    const onSendClicked = () => {
        if (userText.length > 0) {
            sendMessage([userText]);
            setUserText('');
        }
    }

    return (
        <div>
            <input type="text" value={userText} onChange={e => setUserText(e.target.value)} />
            <button onClick={onSendClicked}>שלח</button>
        </div>
    )
};

export default CreateMessagePanel;
