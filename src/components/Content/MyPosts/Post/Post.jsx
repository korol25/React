import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.post}>
        <img src={props.people}></img>
        <span>{props.text}</span>
        <div>Like {props.like}</div>
      </div>
     
    );
  }
  
  export default Post;