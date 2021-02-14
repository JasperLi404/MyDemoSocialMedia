import Profile from './Profile.jsx';
import React from 'react';
import {getUserProfile} from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';




class ProfileContainer extends React.Component   {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getUserProfile(userId);
       }
    render() {
        
        return( <Profile {...this.props} profile={this.props.profile} /> )
        }
    }

    
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
    


let mapStateToProps = state => ({
    profile: state.profilePage.profile
}) 

let WithUrlDataContainer = withRouter(AuthRedirectComponent);
       



export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainer);