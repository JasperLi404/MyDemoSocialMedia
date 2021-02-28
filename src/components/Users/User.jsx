import React from 'react';
import styles from './users.module.css';
import chatbot from '../../assets/image/chatbot.png';
import { NavLink } from 'react-router-dom';

let User = ({user, follow, unfollow, ...props}) => {
    return(
        <div> 
            <div className={styles.cover} key={user.id}>
                <span className={styles.img_cover}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={styles.userPhoto} src={user.photos.small != null ?  user.photos.small : chatbot} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed ? 
                            <button   className={styles.buttonFolUnfol} 
                            onClick={()=> {unfollow(user.id)}}><h4>UNFOLLOW</h4></button> : 
                            <button
                            className={styles.buttonFolUnfol}  onClick={()=> {follow(user.id)}}>
                                     <h4>FOLLOW</h4>
                            </button>
                        }
                    </div>
                </span>
                <span className={styles.name_cover}>
                    <div className={styles.name}>{user.name }</div>
                    {/* <div className={styles.status}>{'" ' + u.website + ' "'}</div> */}
                </span>
                <span>
                    <span className={styles.location}>
                        {/* <div>{u.city}</div> */}
                    </span>
                </span>
            </div>
         
    </div> 
    )
   
 }




export default User;