import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserItem.module.css';



const UserItem = (props) => {

    let FollowingHandle = (userId)=>{
       
       
        if(props.user.followed){
            props.onUnfollow(userId);
           
        }else{
            props.onFollow(userId);
           
        }


    };

    return (
        <div className={s.userItem}>
            <div>
                <NavLink to={'/profile/'+props.user.id}>
                    <img className={s.avatar} src={props.user.photos.small?props.user.photos.small:props.defaultAvatar} alt=""/>
                </NavLink>
           
            </div>
            <div>{props.user.id} </div>
            <div>{props.user.name} </div>
            <div>{props.user.status} </div>
           
            <div>
                <button  
                    disabled={props.followingInProgress.some((id)=>{ return id===props.user.id; })} 
                    onClick={()=>{FollowingHandle(props.user.id)}}
                >
                    {props.user.followed?'unfollow':'follow'}
                </button>
               
            </div>
            
         
            
            
        </div>
    );     


}

export default UserItem;