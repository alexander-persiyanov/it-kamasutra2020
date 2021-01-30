import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
}


const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Ivan" id="2"/>
                <DialogItem name="Roberta" id="3"/>
                
            </div>
            <div className={s.messages}>
                <Message message="Message -1" />
                <Message message="Message -2" />
               



            </div>
        </div>
    );


}

export default Dialogs;