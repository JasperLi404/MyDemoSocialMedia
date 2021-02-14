import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return{
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData
  }
}
let mapDisatchToProps = (dispatch) => {
  return{
    updateNewMessageText: (text) => {dispatch(updateNewMessageActionCreator(text))},
    addMessage: () => { dispatch(addMessageActionCreator());}
  }
}



const DialogsContainer = connect(mapStateToProps,mapDisatchToProps) (AuthRedirectComponent);


export default DialogsContainer;