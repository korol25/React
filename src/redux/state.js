import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello World', likesCount: 15, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
                { id: 2, message: 'My name is Sasha', likesCount: 20, people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
                { id: 3, message: 'I live in USA', likesCount: 30, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        topFriendsList: {
            bestFriends: [
                { id: 1, name: 'Vova', src: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
                { id: 2, name: 'Oksana', src: 'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094623-stock-illustration-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BE%D0%BB%D0%B8%D1%86%D0%B5%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%BB%D0%B0.jpg' },
                { id: 3, name: 'Sergey', src: ' https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0.jpg' }
            ]
        }
    },

    _callSubscriber() {
        console.log('State Updated');
    },
    getState() {
        return this._state;
    },

    //----------------Dispatch---------------------
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogPage, action);
        //sidebar-reducer
        this._callSubscriber(this._state);
    },
    

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;

export default store;