import React from 'react';

import { connect } from 'react-redux';
import {followAC,unfollowAC,setUsersAC,setCurrentPageAC,setTotalUsersCountAC,toggleIsFetchingAC} from '../../redux/users-reducer';

import * as  axios from 'axios';
import Users from './Users';

import Spinner from '../Commons/Spinner/Spinner';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
        this.getUsers();

    }

    getUsers = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then((response) => {
                
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.togglePreloader(false);
            });
    }


    onPageChanged = (currentPageNumber)=>{
        this.props.togglePreloader(true);
        this.props.setCurrentPage(currentPageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).
            then((response) => {
               
                this.props.setUsers(response.data.items);
                this.props.togglePreloader(false);
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage));

        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        togglePreloader:(isFetching) =>{
            dispatch(toggleIsFetchingAC(isFetching));
        }
    };
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;