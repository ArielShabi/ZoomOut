import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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

WebSocketInitiator.propTypes = {
    children: PropTypes.node.isRequired,
    connect: PropTypes.func.isRequired,
    subscribeToEvent: PropTypes.func.isRequired,
    messageRecived: PropTypes.func.isRequired,
    closed: PropTypes.func.isRequired,
    opened: PropTypes.func.isRequired,

};

export default WebSocketInitiator;
