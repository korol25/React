import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {


  return (
    <div className={classes.mainContent}>
      <ProfileInfo />
      <MyPostsContainer 
      //store={props.store}
      />
    </div>
  );
}

export default Content;