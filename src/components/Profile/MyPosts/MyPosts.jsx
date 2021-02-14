import classes from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';
const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let onAddPost = () =>{
    if(newPostElement.current.value != '')  props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let posts = props.postData
  .map( poster => <Post message={poster.post} likes={poster.likes}/> );

    return(
      <div>
      <h3>My Posts</h3>
    <div>
        <div className={classes.textarea}>
          <textarea onChange={onPostChange} 
            value={props.newPostText}   
            ref={newPostElement}></textarea>
        </div>
        <div>
          <div onClick={onAddPost} className={classes.button} >
            <h4>Add Post</h4>
        </div>

        </div>
    </div>
    <div className={classes.posts}>
       {posts}
     </div>
   </div>
    )
}
export default MyPosts;