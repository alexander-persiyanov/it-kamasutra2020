import React from 'react';

import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';

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



    // getUsers = () => {

    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{ withCredentials:true}).
    //         then((response) => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(response.data.items);
    //             this.props.setTotalUsersCount(response.data.totalCount);

    //         });
    // }

    onFollow = (userId) => {
        // this.props.toggleIsFetching(true);
  
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
            // this.props.toggleIsFetching(false);
                

            }
           
            
                
        });
       
        
       
        
    }

    onUnfollow = (userId) => {
        // this.props.toggleIsFetching(true);
       
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
                     // this.props.toggleIsFetching(false);
                    

                }
               
               
               
                
               
            });
            
           
           
    }


    onPageChanged = (currentPageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPageNumber);

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`,{ withCredentials:true}).
        //     then((response) => {

        //         this.props.setUsers(response.data.items);
        //         this.props.toggleIsFetching(false);
        //     });

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
                // follow={this.props.follow}
                currentPage={this.props.currentPage}
                // unfollow={this.props.unfollow}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}

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