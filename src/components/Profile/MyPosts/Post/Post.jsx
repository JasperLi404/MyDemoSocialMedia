import classes from './Post.module.css';
const Post = ({url, ...props}) => {
  return (

    <div className={classes.item}>
        <img className={classes.ava} src={url} alt="Main Photo" />
      <div>
        <span>{props.message}</span>
      </div>
      <div> 
        <img className={classes.like} src="https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/195_heart_love_favorite_like-512.png" alt=""/> 
        {props.likes}
      </div>
    </div>
  )
}
export default Post;