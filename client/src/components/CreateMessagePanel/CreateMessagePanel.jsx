import React, { useState } from 'react';

const CreateMessagePanel = ({ sendMessages }) => {
    const [userText, setUserText] = useState('');

    const sendMessage = () => {
        if (userText.length > 0) {
            sendMessages([userText]);
            setUserText('');
        }
    }

    return (
        <div>
            <input type="text" value={userText} onChange={e => setUserText(e.target.value)} />
            <button onClick={sendMessage}>שלח</button>
        </div>
    )
};

export default CreateMessagePanel;
