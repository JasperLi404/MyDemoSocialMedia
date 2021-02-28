import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControl.module.css';

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error; 
    return(
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
               {props.children}
            </div>
            { hasError && <span>error</span>} 
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input  = (props) => {
    const {input, meta, child, ...restProps} = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder, name, validator, component, props = {}, text = "" ) => {
    return(
        <div>
                <Field className={classes.field} validate={validator} 
            placeholder={placeholder}
            name={name} component={component} {...props} /> {text}
        </div>
        
    )
}