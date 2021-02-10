import React from 'react';
import s from './Users.module.css';
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'

import UserItem from './UserItem/UserItem';


let Users = (props)=>{

    let usersElements = props.users.map((u) => { 
        return (
            <UserItem 
                key={u.id} 
                user={u} 
                followingInProgress={props.followingInProgress} 
                defaultAvatar={userDefaultAvatar} 
                onFollow={props.onFollow} 
                onUnfollow={props.onUnfollow} 
                
               
               
            />
        ); 
    });
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>

            <h2>Users List</h2>
            <div>
                {usersElements}
            </div>
            <div className={s.paginationContainer}>
                {pages.map((p) => {
                    return (
                        <div
                            className={props.currentPage === p ? s.active : ''}
                            onClick={() => {  props.onPageChanged(p) }}
                        >{p}</div>
                    );
                })}


            </div>

        </div>
    );
}

export default Users;