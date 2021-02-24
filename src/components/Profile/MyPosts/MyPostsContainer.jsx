import  MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reducer.js';
import { connect } from 'react-redux';
 

const mapStateToProps = state => {
  
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;