import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
const Profile = ({profile, isOwner, ...props}) => {
    if(!profile){
        return(<Preloader />)
    }
    return(
        <div>
            <ProfileInfo profile={profile}
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto}
            status={props.status} 
                    updateStatus={props.updateStatus}
                    saveProfile={props.saveProfile} />
            {isOwner && <MyPostsContainer profile={props.profile}/> }
            
       </div>
    )
}
export default Profile;