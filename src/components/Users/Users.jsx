import React from 'react';
import styles from './users.module.css';
import chatbot from '../../assets/image/chatbot.png';
import { NavLink } from 'react-router-dom';

import { UsersAPI } from '../../API/api';


let Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }


    return(
        <div>
            <div className={styles.pageList}>
                {pages.map(p => {
                            return <span onClick={()=>{props.onPageChanged(p)}} className={props.currentPage == p ? styles.selectedPage : styles.unSelectedPage}>{p}</span>
                        })}
            </div>
        
        { 
            props.users.map(u => <div className={styles.cover} key={u.id}>
                <span className={styles.img_cover}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userPhoto} src={u.photos.small != null ?  u.photos.small : chatbot} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ? 
                            <button   className={styles.button} 
                            onClick={()=> {  props.follow(u.id) }}><h4>UNFOLLOW</h4></button> : 
                            <button disabled={props.followingInProgress.some(id => id === u.id)} 
                            className={styles.button}  onClick={()=> {props.unfollow(u.id)}}>
                                     <h4>FOLLOW</h4>
                            </button>
                        }
                    </div>
                </span>
                <span className={styles.name_cover}>
                    <div className={styles.name}>{u.name }</div>
                    {/* <div className={styles.status}>{'" ' + u.website + ' "'}</div> */}
                </span>
                <span>
                    <span className={styles.location}>
                        {/* <div>{u.city}</div> */}
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}




export default Users;