import React, { useState } from 'react';

const CreateMessagePanel = ({ addMessages }) => {
    const [userText, setUserText] = useState('');

    const sendMessage = () => {
        if (userText.length > 0) {
            addMessages([userText]);
            setUserText('');
        }
    }

    return (
        <div>
            <input type="text" value={userText} onInput={e => setUserText(e.target.value)} />
            <button onClick={sendMessage}>שלח</button>
        </div>
    )
};

export default CreateMessagePanel;
