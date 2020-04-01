import React, { useEffect } from 'react';

const WebSocketInitiator = ({ children, connect, subscribeToEvent, messageRecived, closed, opened }) => {

    useEffect(() => {
        connect();
        subscribeToEvent('message', data => messageRecived(data));
        subscribeToEvent('close', (code, reason) => closed({ code, reason }));
        subscribeToEvent('open', opened);
    })
    return (
        <>{children}</>
    );
};

export default WebSocketInitiator;