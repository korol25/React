import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {AddMessageFormRedux} from './AddMessageForm'



const Dialogs = (props) => {

  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = state.messages.map(k => <Message message={k.message} />);
 
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs} >
      <div className={classes.dialogsItem}>
        <div>{dialogsElements}</div>
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}



export default Dialogs;