import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

  let state = props.dialogPage;
 
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
 
  let messagesElements = state.messages.map(k => <Message message={k.message} />);

  let newMessageBody = state.newMessageBody;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={classes.dialogs} >
      <div className={classes.dialogsItem}>
      <div>{dialogsElements}</div>
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' cols="30" rows="3"></textarea>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;