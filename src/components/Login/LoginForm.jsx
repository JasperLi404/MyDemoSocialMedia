import React from 'react';
import { required } from '../../utils/validators/validator';
import { createField, Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControl.module.css';



const LoginForm = ({handleSubmit, error,captchaURL }) => {
    return(
        <form onSubmit={handleSubmit}>
                { createField("Email", "email",[required], Input ) }
                { createField("Password", "password",[required], Input, {type: "password"} ) }
                { createField(null, "rememberMe",[], Input, {type: "checkbox"}, "Remember Me" ) }
                {captchaURL && <img src={captchaURL} />}
                {captchaURL && createField("symbols from img", "captcha", [required], Input)}
                {error && 
                        <div className={styles.formSummaryError}>
                            {error}
                        </div>
                }
                
                <div>
                    <button>Login</button>
                </div>
        </form>
    )
}
export default LoginForm;