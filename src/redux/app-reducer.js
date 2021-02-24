import { getAuthUserData } from "./auth-reducer";

let INITIALIZED_SUCCESS = " INITIALIZED-SUCCESS";
let initialStore = {
    initialized: false

};

const appReducer = (state = initialStore, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
    
}
export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});
export const initializeApp = () => async(dispatch) => {
    let promise =   dispatch(getAuthUserData());

    await Promise.all([promise])
    dispatch(initializedSuccess());

}

export default appReducer;