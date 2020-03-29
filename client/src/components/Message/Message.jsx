import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
    <div>
        <span>{message.from.name}:    </span>
        <span>{message.data}</span>
    </div>
);

Message.propTypes = {
    message : PropTypes.shape({
        data: PropTypes.string,
        from: PropTypes.shape({
            name: PropTypes.string
        })
    }).isRequired
}

export default Message;
