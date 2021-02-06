import React from 'react';

import { connect } from 'react-redux';
import {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching} from '../../redux/users-reducer';

import * as  axios from 'axios';
import Users from './Users';

import Spinner from '../Commons/Spinner/Spinner';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.getUsers();

    }

    getUsers = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                
            });
    }


    onPageChanged = (currentPageNumber)=>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).
            then((response) => {
               
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });

    }


    render() {
        return<>

            <Users 
                users={this.props.users} 
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={ this.props.pageSize}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}

            ></Users>
            {this.props.isFetching?<Spinner></Spinner>:''}
            
        
        </>
           
        
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
       
       
    };
}
//--si puo accorciare passando un object opposto di  fuction(dispatch) 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users)=>{
//             dispatch(setUsers(users));
//         },
//         setCurrentPage:(currentPage)=>{
//             dispatch(setCurrentPage(currentPage));

//         },
//         setTotalUsersCount:(totalCount) => {
//             dispatch(setTotalUsersCount(totalCount));
//         },
//         toggleIsFetching:(isFetching) =>{
//             dispatch(toggleIsFetching(isFetching));
//         }
//     };
// }


const UsersContainer = connect(mapStateToProps, 
{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,


}
)(UsersAPIComponent);

export default UsersContainer;