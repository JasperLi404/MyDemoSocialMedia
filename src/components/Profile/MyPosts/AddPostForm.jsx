import {Field} from 'redux-form';
import React from 'react';
import classes from './MyPosts.module.css';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(300);

const AddPostForm = props => {
    return(
      <form onSubmit={props.handleSubmit}>
        <div className={classes.textarea}>
            <Field component={Textarea} 
            name={"newPostBody"}
             validate={[ required, maxLength10 ]}
              placeholder={"Write here..."} />
          </div>
          <div>
            <button className={classes.button} >
              <h4>Add Post</h4>
          </button>
  
          </div>
      </form>
    )
  }
export default AddPostForm;