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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
    
}
export const setAuthUserData = (userId, email, login) => ({type:SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me().then(response => {
        let {id, email, login} = response.data.data; 
                  if(response.data.resultCode === 0){
                    dispatch(setAuthUserData(id, email, login));
  
                  }
              }) 
}
export default authReducer;