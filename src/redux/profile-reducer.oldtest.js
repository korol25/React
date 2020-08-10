const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");

it('new post should be added', () => {
    let state = ({
        posts: [
            { id: 1, message: 'Hello World', likesCount: 15, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
            { id: 2, message: 'My name is Sasha', likesCount: 20, people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
            { id: 3, message: 'I live in USA', likesCount: 30, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
        ],
        profile: null,
        status: '',
    });
    let action = addPostActionCreator('it is test');
    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(3);
    expect (newState.posts.message).toBe('it is test');
})


it('after deleting length', () => {
    let state = ({
        posts: [
            { id: 1, message: 'Hello World', likesCount: 15, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
            { id: 2, message: 'My name is Sasha', likesCount: 20, people: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
            { id: 3, message: 'I live in USA', likesCount: 30, people: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
        ],
        profile: null,
        status: '',
    });
    let action = deletePost(1);
    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(2 );
  
})
