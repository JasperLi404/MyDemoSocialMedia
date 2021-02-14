import  MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer.js';
import { connect } from 'react-redux';
 

const mapStateToProps = state => {
  
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;