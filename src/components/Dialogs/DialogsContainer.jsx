import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
       
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageBody: (messageBody) => {
            dispatch(updateNewMessageBodyAC(messageBody));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    };
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);