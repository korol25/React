const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = ({
        dialogs: [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Vova' },
            { id: 3, name: 'Sergey' },
            { id: 4, name: 'Oksana' }
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'Yo' },
        ],
        newMessageBody: ''

});
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = [...state.newMessageBody];
            let body = stateCopy.newMessageBody;
            stateCopy.messages = [...state.messages];
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({ id: 4, message: body });
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = [...state.newMessageBody];
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;