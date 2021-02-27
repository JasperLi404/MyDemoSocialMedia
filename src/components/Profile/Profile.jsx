import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {
    return(
        <div>
            <ProfileInfo profile={props.profile}
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto}
            status={props.status} 
                    updateStatus={props.updateStatus}
                    saveProfile={props.saveProfile} />
            <MyPostsContainer/>
       </div>
    )
}
export default Profile;