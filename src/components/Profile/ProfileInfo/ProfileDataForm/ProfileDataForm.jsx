import { reduxForm } from 'redux-form';
import styles from "../ProfileInfo.module.css"
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls.js';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(
        <form onSubmit={handleSubmit}> 
            <div><button>SAVE</button></div>
            <div>
                <b>Full Name:</b> {createField("Full Name", "fullName", [], Input)  }
            </div>

        <div>
            <b>Looking for a job:</b> {createField("","lookingForAJob", [], Input, {type:"checkbox"})}
        </div>
        <div>My professional skills:
             {createField("My professional skills", "lookingForAJobDescrition", [], Textarea, )} </div>
        <div>
            <b>About Me:</b> {createField("About Me", "aboutMe", [], Textarea)}
        </div>
        <div>
        <b>Contacts: </b>
            {Object.keys(profile.contacts).map(key => {
                return  <div key={key} className={"contact"}>
                    <b>{key}:</b> {createField(`${key}`, "contacts." + key, [], Input)}
                </div>
                
            })}                     
        </div>
        {error && 
                        <div className={styles.formSummaryError}>
                            {error}
                        </div>
        }
</form> 
    )
}
const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;