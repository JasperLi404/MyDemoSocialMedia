import { connect } from "react-redux";
import { followSucess, setCurrentPage, unfollowSucess, toggleFollowingProgress, requestGetUsers} from "../../redux/users-reducer";
import React from 'react';
import { getTotalUsersCount, getPageSize, getUsers,
     getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selector.js";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";



class UsersContainer extends React.Component {
    componentDidMount(){
        const {currentPage, pageSize} = this.props;
        this.props.requestGetUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestGetUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            { this.props.isFetching ? <Preloader />  :   <Users 
            totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}  
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress} />}
      </>

    }
}




let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)


    }
}

// let mapDispatchToProps = dispatch => {
//     return{
//         follow: (userId) => {
//             dispatch(followAc(userId));
//         },
//         unFollow: (userId) => {
//             dispatch(unfollowAc(userId));
//         },
//         setUsers: users => {
//             dispatch(setUsersAc(users));
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAc(pageNumber));
//         },
//         setTotalUsersCount: totalCount => {
//             dispatch(setUsersTotalCountAc(totalCount));
//         },
//         toggleIsFetchingAc: isFetching => {
//             dispatch(toggleIsFetchingAc(isFetching));
//         }
//     }
// }
 

export default compose(withAuthRedirect,
    connect(mapStateToProps, { follow: followSucess, 
        unfollow: unfollowSucess, setCurrentPage,
        toggleFollowingProgress, requestGetUsers}))(UsersContainer);
 