import React from 'react';
import s from './Users.module.css';


import UserItem from './UserItem/UserItem';

const Users = (props) => {

   
    let usersElements = props.users.map((u)=>{ return <UserItem user={u} follow={props.follow} unfollow={props.unfollow} defaultAvatar={props.defaultAvatar} />;});
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