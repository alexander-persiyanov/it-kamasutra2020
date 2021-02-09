import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserItem.module.css';



const UserItem = (props) => {

    let FollowingHandle = (userId)=>{
        
     
        if(props.user.followed){
            props.onUnfollow(userId);
        }else{
            props.onFollow(userId)
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

                {/* {props.user.followed?
                    <button onClick={()=>{
                      
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+props.user.id, {}, 
                        {
                            withCredentials:true,
                            headers:{
                                "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
                            }
                        }
                        ).then((response) => {
                            
                            if (response.data.resultCode == 0) {
                            
                                this.props.unfollow(props.user.id);
                            
                                
                
                            }
                            
                                
                        });

                   

                    }}>Unfollow</button>
                    :
                    <button onClick={()=>{
                    
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+props.user.id, {}, 
                        {
                            withCredentials:true,
                            headers:{
                                "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
                            }
                        }
                        ).then((response) => {
                            
                            if (response.data.resultCode == 0) {
                            
                                this.props.follow(props.user.id);
                            
                                
                
                            }
                            
                                
                        });

                    }}>Follow</button>
                } */}
                <button onClick={()=>{FollowingHandle(props.user.id)}}>{props.user.followed?'unfollow':'follow'}</button>
               <div>{props.user.followed?'unfollow':'follow'}</div>
            </div>
            
         
            
            
        </div>
    );     


}

export default UserItem;