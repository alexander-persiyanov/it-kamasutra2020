import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {sendMessageAC,updateNewMessageBodyAC} from '../../redux-custome/dialogs-reducer';

const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogsPage.dialogs.map((dialogItem) => { return <DialogItem name={dialogItem.name} id={dialogItem.id} />  });
    let messageElements = props.state.dialogsPage.messages.map((messageItem) => { return <Message message={messageItem.message} id={messageItem.id}/> });
    
    let changeMessageBodyHandle = (e)=>{
        
        props.dispatch(updateNewMessageBodyAC(e.target.value));
    };

    let sendMessageHandle = ()=>{
        props.dispatch(sendMessageAC());
    };


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea 
                        
                        value={props.state.dialogsPage.newMessageBody?props.state.dialogsPage.newMessageBody:""}
                        onChange={changeMessageBodyHandle}
                        placeholder="Enter your message" 
                        cols="30" rows="5" 
                        
                       
                    >

                    </textarea>
                </div>
                <div><button onClick={sendMessageHandle}>Send</button></div>

            </div>
        </div>
    );


}

export default Dialogs;