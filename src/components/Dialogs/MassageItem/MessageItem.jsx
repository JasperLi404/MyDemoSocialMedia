import classes from './MessageItem.module.css';

const MessageItem = props => {
    // let names = document.querySelectorAll("#name");
    // names.forEach(item=>{
    //     console.log(item.innerHTML);
    //     if(item.innerHTML == "Me")  item.style.color = "#7c9473";
    // })
    return(
        <div className={props.class}>
            <div className={classes.message}> <b id={'name'} >{props.message.speaker}</b>  : {props.message.message}</div>
        </div>
    );
}
export default MessageItem;