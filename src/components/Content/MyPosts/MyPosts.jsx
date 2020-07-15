import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

  let postsElements = props.posts.map((p) =>
    <Post text={p.message} like={p.likesCount} people={p.people} />
  )

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h2>My Posts</h2>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Enter your message' cols="30" rows="3" />
      <div><button onClick={onAddPost}>Add Post</button></div>
      {postsElements}
    </div>

  );
}
export default MyPosts;