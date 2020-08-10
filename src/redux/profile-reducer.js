import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = ({

    posts: [
        { id: 1, message: 'Hello World', likesCount: 15, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
        { id: 2, message: 'My name is Sasha', likesCount: 20, people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
        { id: 3, message: 'I live in USA', likesCount: 30, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
    ],
    profile: null,
    status: '',
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0,
                people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg'
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]

            };
        };
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:{
            return{
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default: return state;
    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);

            dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

            dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
}
export default profileReducer;