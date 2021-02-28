import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';
import photo from "../../../assets/image/photoDialogsUser.jpeg";


const DialogItem = props => {
    let path = '/dialogs/' + props.id;
    return(
    <div className={classes.dialog}>
        <img src={photo}  alt=""/>
        <NavLink className={classes.dialogText} to={path}>{props.name}</NavLink>
    </div>
    );
    
}
export default DialogItem;