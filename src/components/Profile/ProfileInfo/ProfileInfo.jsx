import chatbot from '../../../assets/image/chatbot.png'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import classes from './ProfileInfo.module.css';
import React, { useEffect, useState } from 'react';
import  ProfileDataForm from "./ProfileDataForm/ProfileDataForm.jsx";


const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
    
    let [editMode, setEditMode] = useState(false);
    if(!profile){
            return(<Preloader />)
        }
    const onSubmit =  (formData) => {
        saveProfile(formData).then(
            ()=>{
                setEditMode(false)
            }
        )
    }
    const mainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }
    return(
        
        <div className={classes.profileInfo} >
            {/* <div>
                <img className={classes.imageMainPost} src="https://images.pexels.com/photos/6062504/pexels-photo-6062504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
             </div> */}
             
                 <div className={classes.profileMainPhoto}>
                    <img className={classes.profilePhoto} 
                                src={profile.photos.large !== null ? 
                                profile.photos.large : chatbot }/>

                    {/* {isOwner && <input type={"file"} onChange={mainPhotoSelected} />} */}
                 </div> 


                    {/* {editMode ? < ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile}  /> :
                    <ProfileData profile={profile} 
                        isOwner={isOwner} 
                        goToEditMode={() => { setEditMode(true) }} />} */}
                    <ProfileStatusWithHooks status={status}
                                 updateStatus={updateStatus}/>

                    <div className={classes.Name}>{profile.fullName}</div>
                 
                 {/* {/*</div>  <i>My page <br/> Here is all my life...</i></div> */}

        </div>
    );
}
export default ProfileInfo;

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return( 
        
    <div>
        {isOwner && <div><button onClick={goToEditMode} >edit</button></div>}
            <div><b>Full Name:</b> {profile.fullName} </div>
            <div>
            Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
            About me: {profile.aboutMe}
            </div>
            <div>
            
                {
                profile.lookingForAJob && 
                <div>My professional skills: {profile.lookingForAJobDescription} </div>
                }
            </div>
            {/* <div> */}
            {/* <b>Contacts: </b>
                {Object.keys(profile.contacts).map(key => {
                    return  <Contact contactTitle={key} contactValue={profile.contacts.key} />
                })}                     
            </div> */}
    </div> 
    )
}




const Contact = ({contactTitle, contactValue}) => {
      if(contactValue){
       return( <div>{contactTitle} {contactValue}</div> )
    }
       else{ return <div>I have no {contactTitle}</div>}

    
}

// : 'https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg