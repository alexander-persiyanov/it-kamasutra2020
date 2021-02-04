import React from 'react';

import {sendMessageAC,updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
    
//     let state = props.store.getState();

//     let dialogElements = state.dialogsPage.dialogs.map((dialogItem) => { return <DialogItem name={dialogItem.name} id={dialogItem.id} />  });
//     let messageElements = state.dialogsPage.messages.map((messageItem) => { return <Message message={messageItem.message} id={messageItem.id}/> });

//     let changeMessageBody = (messageBody)=>{
        
//         props.store.dispatch(updateNewMessageBodyAC(messageBody));
//     };

//     let sendMessage = ()=>{
//         props.store.dispatch(sendMessageAC());
//     };


//     return (
//         <Dialogs 
//             dialogElements={dialogElements} 
//             messageElements={messageElements} 
//             messageBody={state.dialogsPage.newMessageBody} 
//             changeMessageBody={changeMessageBody} 
//             sendMessage={sendMessage}
//         />
//     );


// }

let mapStateToProps = (state)=>{
    return{
        dialogsPage:state.dialogsPage,
    };
}

let mapDispatchToProps = (dispatch)=>{
    return {
        changeMessageBody:(messageBody)=>{ 
            dispatch(updateNewMessageBodyAC(messageBody));
        },
        sendMessage:()=>{
            dispatch(sendMessageAC());
        },
    };
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;