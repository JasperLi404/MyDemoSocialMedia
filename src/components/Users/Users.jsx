import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, users,  pageSize, follow, unfollow, ...props}) => {
   
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
       return(
        <div>
            <Paginator currentPage={currentPage}
                        onPageChanged={onPageChanged} 
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize} />
        
        { 
            users.map(u => <User user={u}    key={u.id}
                  follow={follow} unfollow={unfollow}  />)
        }
    </div>
    )
}



export default Users;