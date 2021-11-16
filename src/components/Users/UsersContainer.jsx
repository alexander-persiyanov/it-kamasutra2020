import React from 'react';

import { connect } from 'react-redux';
import {setCurrentPage,requestUsers,follow,unfollow } from '../../redux/users-reducer';
import Users from './Users';

import Spinner from '../Commons/Spinner/Spinner';
import {getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
     
        this.props.requestUsers(this.props.currentPage,this.props.pageSize);
    }


    onPageChanged = (currentPageNumber) => {
        this.props.requestUsers(currentPageNumber,this.props.pageSize);

    }

    render() {
        return <>

            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                onFollow={this.props.follow}
                onUnfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
               
            />
            {this.props.isFetching ? <Spinner></Spinner> : ''}


        </>
    }

}


// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress,
        
//     };
// }
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        
    };
}
//--si puo accorciare passando un object opposto di  fuction(dispatch) a mapDispatchToProps
const UsersContainer = connect(mapStateToProps,
    {
        setCurrentPage,
        requestUsers,
        follow,
        unfollow,
    }
)(UsersAPIComponent);

export default UsersContainer;