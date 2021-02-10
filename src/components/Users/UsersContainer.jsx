import React from 'react';

import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleFollowingInProgress } from '../../redux/users-reducer';

import * as  axios from 'axios';
import Users from './Users';

import Spinner from '../Commons/Spinner/Spinner';
import {usersAPI} from '../../api/api';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        // this.getUsers();
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);

        });

    }

    onFollow = (userId) => {
       
        this.props.toggleFollowingInProgress(true,userId);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+userId, {}, 
            {
                withCredentials:true,
                headers:{
                    "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
                }
            }
        ).then((response) => {
           
            if (response.data.resultCode == 0) {
            
                this.props.follow(userId);
                this.props.toggleFollowingInProgress(false,userId);
           
                 

            }
           
            
                
        });
       
        
       
        
    }

    onUnfollow = (userId) => {
      
       this.props.toggleFollowingInProgress(true,userId);
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+userId, 
            {
                withCredentials:true,
                headers:{
                    "API-KEY":"a5008e7c-13ed-4c09-91fb-8786d1dab1cb"
                }
            }
        ).
            then((response) => {
               
                if (response.data.resultCode == 0) {
                   
                   this.props.unfollow(userId);
                   this.props.toggleFollowingInProgress(false,userId);
                   
                    
                }
               
            });
            
           
           
    }


    onPageChanged = (currentPageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPageNumber);

        usersAPI.getUsers(currentPageNumber,this.props.pageSize).then((data) => {
           
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
           

        });

    }


    render() {
        return <>

            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}
                followingInProgress={this.props.followingInProgress}
               


            ></Users>
            {this.props.isFetching ? <Spinner></Spinner> : ''}


        </>


    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
        



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
        toggleFollowingInProgress,


    }
)(UsersAPIComponent);

export default UsersContainer;