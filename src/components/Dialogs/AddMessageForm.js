import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../Common/FormsControls/FormsControls'
import { required, maxLenghtCreator } from '../../utils/validators/validators'

const maxLenght50 = maxLenghtCreator(50);

export const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} 
          validate={[required,maxLenght50]}
          name="newMessageBody" placeholder='Enter your message' />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    )
  }
  export const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)