import { UsersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/object-helper/object-helper";

const FOLLOW = "FOLLOW",
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialStore = {
    users: [

    //     [
    //         {id:1, 
    //             photoURL:'https://images.pexels.com/photos/3612881/pexels-photo-3612881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    //             followed:true,
    //             fullName:'Sasha',
    //             status:"Good photos only for you",
    //             location:
    //                 {city:'Kiev',
    //                 country:'Ukraine'}
    //         },
    //         {id:2, 
    //         photoURL:'https://images.pexels.com/photos/5033532/pexels-photo-5033532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //         followed:false,
    //         fullName:'Tom', 
    //         status:"I`m a boss!",
    //         location:
    //             {city:'Vinnitsya',
    //             country:'Ukraine'}
    //         },
    //         {id:3, 
    //         photoURL:'https://images.pexels.com/photos/2883244/pexels-photo-2883244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //         followed:false, 
    //         fullName:'Kathy', 
    //         status:"Let`s dance", 
    //         location:{
    //             city:'Kharkiv', 
    //             country:'Ukraine'}
    //         },
    //         {id:4,
    //         photoURL:'https://images.pexels.com/photos/6623923/pexels-photo-6623923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //         followed:true, 
    //         fullName:'Lea', 
    //         status:"I feel like a plactic pig!", 
    //         location:{
    //             city:'Kharkiv', 
    //             country:'Ukraine'}
    //         }
    //     ]


    ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: true
};


const userReducer = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW: 
            return{
                ...state,
                users: updateObjectInArray(state.users,
                     action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return{
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return{...state, users: action.users};
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching.isFetching};   
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{...state, 
                followingInProgress: action.isFetching.isFetching ? 
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id => id != action.userId )
            };
        default:
            return state;
    }
    
}

export const followSucess = (userId) => ({type: FOLLOW, userId});
export const unfollowSucess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });

export const requestGetUsers = (page, pageSize) =>{
    return async (dispatch) => {
       dispatch(toggleIsFetching({isFetching: true}));  
       dispatch(setCurrentPage(page));
   
   
       const data = await UsersAPI.getUsers(page, pageSize) 
        dispatch(toggleIsFetching({isFetching: false}));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount - 10120));
        dispatch(setCurrentPage(page));
} 
}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
            const response = await apiMethod(userId);
            if (response.data.resultCode == 0){
                dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
}


export const unfollow = (userId) =>{
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            UsersAPI.unfollow.bind(UsersAPI), unfollowSucess )
    }
    
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            UsersAPI.follow.bind(UsersAPI), followSucess )
    } 
}


export default userReducer;