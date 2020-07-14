const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = ({

        posts: [
            { id: 1, message: 'Hello World', likesCount: 15, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
            { id: 2, message: 'My name is Sasha', likesCount: 20, people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
            { id: 3, message: 'I live in USA', likesCount: 30, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
        ],
        newPostText: ''
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
                people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg'
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default: return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;