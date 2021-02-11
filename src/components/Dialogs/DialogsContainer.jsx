import React from 'react';

import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;