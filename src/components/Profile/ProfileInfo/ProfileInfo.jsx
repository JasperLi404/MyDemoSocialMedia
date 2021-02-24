import chatbot from '../../../assets/image/chatbot.png'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
            return(<Preloader />)
        }
    return(
        
        <div>
            {/* <div>
                <img className={classes.imageMainPost} src="https://images.pexels.com/photos/6062504/pexels-photo-6062504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
             </div> */}
             <div>
                 <div>
                    <img className={classes.profilePhoto} 
                                src={profile.photos.large !== null ? 
                                profile.photos.large : chatbot }/></div>
                    <ProfileStatusWithHooks status={status}
                                 updateStatus={updateStatus}/>
                 </div> 
                 {/* {/* <i>My page <br/> Here is all my life...</i></div> */}

        </div>
    );
}
export default ProfileInfo;



// : 'https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg