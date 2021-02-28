import React  from 'react';
import classes from "../ProfileInfo/ProfileInfo.module.css";


class ProfileStatus extends React.Component {
   state = {
       editMode: false,
       status: this.props.status
   }
   activateEditMode = () => {
       this.setState({
           editMode: true
       })
   }
   deactivateEditMode = () => {
    this.setState({
        editMode: false
    })
    this.props.updateStatus(this.state.status);
    }
    onStatusChange= (e => {
        this.setState({
            status: e.currentTarget.value
        });
    })
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        return (
            <div className={classes.status}>
                {!this.editMode && 
                <div >
                    <span 
                    onDoubleClick={this.activateEditMode}
                    >{this.props.status || "~~~~~~~~~~~~~~~~~"}</span>
                </div> }
                {this.editMode && <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        ></input>
                </div> }

            </div>)
        
    }
}
   
export default ProfileStatus;