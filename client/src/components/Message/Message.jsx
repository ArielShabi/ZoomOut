import React from 'react';

const Message = (props) => { 
    console.log(props.message);
    return(
    <div>
        <span>{props.message.from.name}:    </span>        
        <span>{props.message.data}</span>
    </div>
);}

export default Message;
