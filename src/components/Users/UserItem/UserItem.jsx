import React from 'react';
import s from './UserItem.module.css';



const UserItem = (props) => {

    let FollowingHandle = (userId)=>{
        if(props.user.followed){
            props.unfollow(userId);
        }else{
            props.follow(userId)
        }
        


    };

    return (
        <div className={s.userItem}>
            <img className={s.avatar} src={props.user.avatar?props.user.avatar:props.defaultAvatar} alt=""/>
            <div>{props.user.fullname} </div>
            <div>{props.user.status} </div>
            <div>{props.user.location.country} {props.user.location.city}</div>
            <div><button onClick={()=>{FollowingHandle(props.user.id)}}>{props.user.followed?'followed':'unfollowed'}</button></div>
            
         
            
            
        </div>
    );     


}

export default UserItem;