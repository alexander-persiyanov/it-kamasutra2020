import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   
    let dialogElements = props.dialogs.map((dialogItem) => { return <DialogItem name={dialogItem.name} id={dialogItem.id} key={dialogItem.id} />  });
    let messageElements = props.messages.map((messageItem) => { return <Message message={messageItem.message} id={messageItem.id} key={messageItem.id}/> });
    
    let changeMessageBodyHandle = (e)=>{
        props.changeMessageBody(e.target.value);
    };

    let sendMessageHandle = ()=>{
        props.sendMessage();
        
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea 
                        
                        value={props.newMessageBody?props.newMessageBody:""}
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