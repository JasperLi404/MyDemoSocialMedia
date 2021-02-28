import React, { useEffect, useState } from 'react';
import classes from "../../Profile/ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks  = (props) =>  {
    let [editMode, setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange  = (e) =>{
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    
        return (
            <div>
                {!editMode && <div className={classes.statusInfo} >
                    <span   onDoubleClick={activateEditMode}>
                       <i> {props.status || "~~~~~~~~~~~~~~~~~"} </i>
                    </span>
                </div> }
                {editMode && <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        ></input>
                </div> }

            </div>)
}
   
export default ProfileStatusWithHooks