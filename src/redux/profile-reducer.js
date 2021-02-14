import { UsersAPI } from "../API/api";

let ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialStore = {
    postData : [
        {id:1,
        post:'My first post, I have been waiting for it  forever', 
        likes: 654 },
        {id:2, post: 'Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!',  likes:56}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 3,
                post: state.newPostText,
                likes: 28
            };
            return{
                ...state,
                postData: [...state.postData, NewPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
    
}


export const addPostActionCreator = () => ({type:ADD_POST});
export const updateNewPostActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText});
const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {

    UsersAPI.getProfile(userId)
    .then(response => {
        debugger;
        dispatch(setUserProfile(response.data));
    }); 

    
} 


export default profileReducer;