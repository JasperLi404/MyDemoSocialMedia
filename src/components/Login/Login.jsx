import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from "redux-form";
import { login } from '../../redux/auth-reducer';
import LoginForm from './LoginForm';

const LoginReduxForm =  reduxForm({ form:'login'})(LoginForm);

const Login = (props) => {
 const onSubmit = formData => {
     console.log(formData.captcha);
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
}
    console.log(props.captchaURL);
    if(props.isAuth){
        return (<Redirect to="profile" />)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>    
    );
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect( mapStateToProps,{ login })(Login);