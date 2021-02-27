import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';
import { reduxForm} from 'redux-form';
import AddPostForm from './AddPostForm';


const AddPostFormRedux = reduxForm({form:"profileAddPostForm"})(AddPostForm);

const MyPosts = React.memo((props) => {

  const addNewPost = dataForm => {
    props.addPost(dataForm.newPostBody);
  }

  let posts = props.postData
  .map( poster => <Post key={poster.id} message={poster.post} likes={poster.likes}/> );
    return(
      <div>
      <h3>My Posts</h3>
    <div>
        <AddPostFormRedux onSubmit={addNewPost} />
    </div>
    <div className={classes.posts}>
       {posts}
     </div>
   </div>
    )
})



export default MyPosts;