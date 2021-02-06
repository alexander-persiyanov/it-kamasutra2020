import React from 'react';
import s from './Users.module.css';
import * as  axios from 'axios';
import userDefaultAvatar from '../../assets/images/default-avatar-icon.png'
import UserItem from './UserItem/UserItem';



class Users extends React.Component {

    componentDidMount() {

        this.getUsers();

    }

    

    getUsers = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then((response) => {
                console.dir(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }


    onPageChanged = (currentPageNumber)=>{
       
        this.props.setCurrentPage(currentPageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).
            then((response) => {
               
                this.props.setUsers(response.data.items);
            });

    }


    render() {
        let usersElements = this.props.users.map((u) => { return <UserItem key={u.id} user={u} follow={this.props.follow} unfollow={this.props.unfollow} defaultAvatar={userDefaultAvatar} />; });
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                className={this.props.currentPage === p ? s.active : ''}
                                onClick={() => {  this.onPageChanged(p) }}
                            >{p}</div>
                        );
                    })}


                </div>

            </div>
        );
    }

}

export default Users;