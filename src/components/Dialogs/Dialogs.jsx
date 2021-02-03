import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    
    let changeMessageBodyHandle = (e)=>{
        props.changeMessageBody(e.target.value);
    };

    let sendMessageHandle = ()=>{
        props.sendMessage();
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {props.dialogElements}

            </div>
            <div className={s.messages}>
                {props.messageElements}
                <div>
                    <textarea 
                        
                        value={props.messageBody?props.messageBody:""}
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