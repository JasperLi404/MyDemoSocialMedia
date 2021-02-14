import chatbot from '../../../assets/image/chatbot.png'
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    console.log(props.profile);
    if(props.profile === null){
            return(<Preloader />)
        }
    return(
        
        <div>
            <div>
                <img className={classes.imageMainPost} src="https://images.pexels.com/photos/6062504/pexels-photo-6062504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
             </div>
             <div>
                 <div><img className={classes.profilePhoto} 
                 src={props.profile.photos.small !== null ? props.profile.photos.small : chatbot }/></div>
                 <i>{props.profile.aboutMe === null ? props.profile.fullName : props.profile.aboutMe } </i>
                 </div> 
                 {/* {/* <i>My page <br/> Here is all my life...</i></div> */}

        </div>
    );
}
export default ProfileInfo;



// : 'https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg