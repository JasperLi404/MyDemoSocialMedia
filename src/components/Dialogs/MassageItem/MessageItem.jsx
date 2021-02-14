import classes from './MessageItem.module.css';

const MessageItem = props => {
    return(
        <div className={classes.cover}>
            <img className={classes.img} src={props.message.src} alt=""/>
            <div className={classes.message}>{props.message.message}</div>
        </div>
    );
}
export default MessageItem;