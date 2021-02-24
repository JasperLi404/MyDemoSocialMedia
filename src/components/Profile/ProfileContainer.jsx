import Profile from './Profile.jsx';
import React from 'react';
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component   {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorisedUserId;
            
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
       }
    render() {
        
        return( <Profile {...this.props} profile={this.props.profile} 
            status={this.props.status} updateStatus={this.props.updateStatus}
             /> )
        }
    }

    

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.profilePage.isAuth
}) 





export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}))(ProfileContainer)