import React from 'react';
import s from './Users.module.css';
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'

import UserItem from './UserItem/UserItem';
import Paginator from '../Commons/Paginator/Paginator';


let Users = ({
    users,followingInProgress,onFollow,onUnfollow,
    totalUsersCount,pageSize,currentPage,onPageChanged,...props
    })=>{

    let usersElements = users.map((u) => { 
        return (
            <UserItem 
                key={u.id} 
                user={u} 
                followingInProgress={followingInProgress} 
                defaultAvatar={userDefaultAvatar} 
                onFollow={onFollow} 
                onUnfollow={onUnfollow} 
                
            />
        ); 
    });
    
   
    return (
        <div className={s.users}>

            <h2>Users List</h2>
            <div>
                {usersElements}
            </div>
          
            <Paginator 
                totalCount = {totalUsersCount}  
                pageSize ={pageSize} 
                currentPage={ currentPage} 
                onPageChanged = {onPageChanged}
            />

        </div>
    );
}

export default Users;