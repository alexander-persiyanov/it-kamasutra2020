import React from 'react';
import { connect } from 'react-redux';

import { addPostAC, updatePostAC } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextPost: state.profilePage.newPostValue,

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (msg) => { dispatch(addPostAC(msg)) },
        updateNewPostText: (text) => { dispatch(updatePostAC(text)) },

    };
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;