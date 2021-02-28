import React from 'react';
import classes from './AddMess.module.css';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/store.js';
const AddMess = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () =>{
        if( newMessageElement.current.value != ''){
          props.dispatch(addMessageActionCreator());
          newMessageElement.current.value='';
        }
      }
      let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
      }
      
    return (
        <div className={classes.cover}>
            <div className={classes.textarea}>
            <textarea ref={newMessageElement}
                value={props.newMessageText}
                onChange={onMessageChange}></textarea>
            </div>
            <div>
            <div onClick={addMessage} className={classes.buttonAddMess} >
                <h4>Add Message</h4>
            </div>
        </div>
        </div>
    );
};
export default AddMess;