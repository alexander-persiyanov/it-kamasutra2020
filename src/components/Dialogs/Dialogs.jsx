import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Alex", },
        { id: 2, name: "Ivan", },
        { id: 3, name: "Roberta", },
    ];

    let messagesData = [
        { id: 1, message: "Hello", },
        { id: 2, message: "Hou are you?", },
        { id: 3, message: "Thanks, im good and you?", },
    ];

    let dialogsMap = dialogsData.map((dialogItem) => { return <DialogItem name={dialogItem.name} id={dialogItem.id} /> });
    let messageMap = messagesData.map((messageItem) => { return <Message message={messageItem.message} id={messageItem.id} /> });


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsMap}

            </div>
            <div className={s.messages}>
                {messageMap}

            </div>
        </div>
    );


}

export default Dialogs;