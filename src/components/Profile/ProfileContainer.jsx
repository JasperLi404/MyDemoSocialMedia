import Profile from './Profile.jsx';
import React from 'react';
import {getUserProfile, getStatus,
         updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component   {
    componentDidMount(){
        this.refreshProfile();
       }
       refreshProfile(){
           let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorisedUserId;
            
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
       }
       componentDidUpdate(prevPropss, prevState, snapshot){
           if(this.props.match.params.userId != prevPropss.match.params.userId){
                this.refreshProfile();
           }
        
        
       }
    render() {
        return( <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile} 
            status={this.props.status} updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}))(ProfileContainer)