import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';


const MyPosts = React.memo(props => {

  let postsElements = props.posts.map((p) =>
    <Post text={p.message} like={p.likesCount} people={p.people} />
  )

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postsBlock}>
      <h2>My Posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div>

  );
});

let maxLenght10 = maxLenghtCreator(10);
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"} component={Textarea} placeholder='Enter your message'
          validate={[required, maxLenght10]} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;