import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Message.module.css';


const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    );
}



export default Message;