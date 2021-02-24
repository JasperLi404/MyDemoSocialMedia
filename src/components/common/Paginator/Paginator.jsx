import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({currentPage, onPageChanged, totalUsersCount,  pageSize, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize) ;
        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    return(
        <div>
            <div className={styles.pageList}>
                {pages.map(p => {
                            return <span onClick={()=>{onPageChanged(p)}} 
                            className={currentPage == p ? styles.selectedPage : styles.unSelectedPage}>{p}</span>
                        })}
            </div>
        </div>
    )
}


// disabled={props.followingInProgress.some(id => id === u.id)} 

export default Paginator;