import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsMap = props.state.dialogsPage.dialogs.map((dialogItem) => { return <DialogItem name={dialogItem.name} id={dialogItem.id} />  });
    let messageMap = props.state.dialogsPage.messages.map((messageItem) => { return <Message message={messageItem.message} id={messageItem.id}/> });


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