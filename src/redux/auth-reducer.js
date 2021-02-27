import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "../API/api";

let SET_USER_DATA = "SET-USER-DATA",
    GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";
let initialStore = {
    isFetching: false,
    userId:null,
    userId:null,
    login:null,
    isAuth: false,
    captchaURL: null

};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return{
                 ...state,
                 ...action.payload
                }            
        default:
            return state;
    }
    
}
export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({type:SET_USER_DATA, 
    payload: {userId, email, login, isAuth, captcha}})

export const getCaptchaURLSuccess = captchaURL => ({type:GET_CAPTCHA_URL_SUCCESS,  payload: {captchaURL}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await  AuthAPI.me();
    let {id, email, login} = response.data.data; 
    if(response.data.resultCode === 0){
           dispatch(setAuthUserData(id, email, login, true));
  
        }
    }
export const login = (email,password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe, captcha)
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData());
        } else  {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaURL());
            }
            let message = response.data.messages.length>0 ? 
            response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", {_error: message}));
        } 
               
}
export const getCaptchaURL = () => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(getCaptchaURLSuccess(captchaURL))
}


export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;