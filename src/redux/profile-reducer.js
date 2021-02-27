import { profileAPI, UsersAPI } from "../API/api";
import { stopSubmit } from "redux-form";


let ADD_POST = "ADD-POST",
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS',
    DELETE_POST = 'DELETE-POST',
    SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
let initialStore = {
    postData : [
        {id:1,
        post:'My first post, I have been waiting for it  forever', 
        likes: 654 },
        {id:2, post: 'Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!',  likes:56}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 3,
                post: action.newPostBody,
                likes: 28
            };
            return{
                ...state,
                postData: [...state.postData, NewPost]
            }
       
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
             }
        case DELETE_POST: 
        return{
            ...state, postData: [...state.postData.filter(p => p.id != action.postId)]
        }
        case SAVE_PHOTO_SUCCESS: 
        return{
            ...state, postData: {...state.postData, photos: action.photos}
        }
            
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostBody) => ({type:ADD_POST,newPostBody});
export const deletePost = (postId) => ({type:DELETE_POST, postId});
const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
const setStatus = (status) => ({type:SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos});
export const getUserProfile = (userId) => async (dispatch) => {

    const response =  await UsersAPI.getProfile(userId)
    console.log(response);
    dispatch(setUserProfile(response.data));

    
} 
export const getStatus = (userId) => async (dispatch) => {

    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));  

} 

export const updateStatus = (status) => async (dispatch) => {

    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
} 

export const savePhoto = (file) => async (dispatch) => {

    const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
} 
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    } else{
        dispatch(stopSubmit("edit-profile",{_error: response.data.messages[0]}))
    }
} 


export default profileReducer;