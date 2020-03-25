import {createActions} from 'redux-actions';

const {addMessageAction} = createActions(
    {
        ADD_MESSAGE: (messages) => ({messages})
    }    
)

export {addMessageAction};
