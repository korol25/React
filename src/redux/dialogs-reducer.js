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
        ]
});
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            };
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;