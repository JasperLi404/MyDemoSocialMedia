import DialogItem from './DialogItem/DialogItem.jsx';
import classes from './Dialogs.module.css';
import MessageItem from './MassageItem/MessageItem.jsx';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator.js';
import { Textarea } from '../common/FormsControls/FormsControls.js';
 const maxLength50 =  maxLengthCreator(50);
const Dialogs = (props) => { 
      const addNewMessage = (dataForm) => {
        props.addMessage(dataForm.newMessageBody);
      }

      let dialogs = props.dialogsData
      .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
      let messages = props.messagesData
      .map( mes => <MessageItem message={mes} /> );

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}
const AddMessageForm = props => {
   
    return(
        <form  onSubmit={props.handleSubmit} className={classes.cover}>
            <div className={classes.textarea}>
                <Field component={Textarea} 
                name={"newMessageBody"} 
                 placeholder={"Enter your message..."}  
                 validate={[required, maxLength50]} />
            
            </div>
            <div>
            <button className={classes.button}>
                <h4>Send</h4>
            </button>
        </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;