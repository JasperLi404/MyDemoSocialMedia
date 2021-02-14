import { connect } from "react-redux";
import { followSucess, setCurrentPage, setUsers, unfollowSucess, toggleFollowingProgress,
    getUsers} from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI } from "../../API/api";



class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
        { this.props.isFetching ? <Preloader />  :   <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}  
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                        />}
      </>

    }
}




let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress


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


export default connect(mapStateToProps, { follow: followSucess, unfollow: unfollowSucess, setCurrentPage,
     toggleFollowingProgress, getUsers})(UsersContainer);