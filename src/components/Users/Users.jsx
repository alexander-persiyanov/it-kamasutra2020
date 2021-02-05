import React from 'react';
import s from './Users.module.css';
import * as  axios from 'axios';
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'
import UserItem from './UserItem/UserItem';




const Users = (props) => {

    if(props.users.length ===0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{
            
            props.setUsers(response.data.items);

        });
    }

   
    let usersElements = props.users.map((u)=>{ return <UserItem user={u} follow={props.follow} unfollow={props.unfollow} defaultAvatar={userDefaultAvatar} />;});
    return (
        <div className={s.users}>

            <h2>Users List</h2>
            <div>
                {usersElements}
            </div>

        </div>
    );     


}

export default Users;