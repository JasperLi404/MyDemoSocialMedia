import { connect } from 'react-redux';
import { addMessageActionCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
  dialogsData: state.dialogsPage.dialogsData,
  messagesData: state.dialogsPage.messagesData
})
let mapDisatchToProps = (dispatch) => {
  return{
    addMessage: (newMessageBody) => { dispatch(addMessageActionCreator(newMessageBody));}
  }
}

export default compose(
  withAuthRedirect,
   connect(mapStateToProps,mapDisatchToProps))(Dialogs);