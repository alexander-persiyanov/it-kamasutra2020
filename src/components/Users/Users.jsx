import React from 'react';
import s from './Users.module.css';
import * as  axios from 'axios';
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'
import UserItem from './UserItem/UserItem';



class Users extends React.Component {

    getUsers = ()=>{

        if(this.props.users.length ===0){

            axios.get("https://social-network.samuraijs.com/api/1.0/users").
            then((response)=>{
                
                this.props.setUsers(response.data.items);
    
            });
        }

    }


    render(){
        let usersElements = this.props.users.map((u)=>{ return <UserItem key={u.id} user={u} follow={this.props.follow} unfollow={this.props.unfollow} defaultAvatar={userDefaultAvatar} />;});
        
        return (
            <div className={s.users}>
    
                <h2>Users List</h2>
                <div>
                    {usersElements}
                </div>
                <button onClick={this.getUsers}>Set Users</button>
    
            </div>
        );      
    }

}

export default Users;