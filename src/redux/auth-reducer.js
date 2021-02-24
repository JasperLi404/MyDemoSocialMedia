import { stopSubmit } from "redux-form";
import { AuthAPI } from "../API/api";

let SET_USER_DATA = "SET-USER-DATA";
let initialStore = {
    isFetching: false,
    userId:null,
    userId:null,
    login:null,
    isAuth: false

};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
    
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type:SET_USER_DATA, 
    payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await  AuthAPI.me();
    let {id, email, login} = response.data.data; 
    if(response.data.resultCode === 0){
           dispatch(setAuthUserData(id, email, login, true));
  
        }
    }
export const login = (email,password, rememberMe) => async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe)
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length>0 ? 
            response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", {_error: message}));
        }
               
}

export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;