import DialogItem from './DialogItem/DialogItem.jsx';
import classes from './Dialogs.module.css';
import MessageItem from './MassageItem/MessageItem.jsx';
import React from 'react';

const Dialogs = (props) => { 
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        if( newMessageElement.current.value != ''){
            props.addMessage();
            newMessageElement.current.value='';
          }
       
      }
      let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
            <div className={classes.cover}>
            <div className={classes.textarea}>
            <textarea ref={newMessageElement}
                value={props.newMessageText}
                onChange={onMessageChange}></textarea>
            </div>
            <div>
            <div onClick={addMessage} className={classes.button} >
                <h4>Add Message</h4>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Dialogs;