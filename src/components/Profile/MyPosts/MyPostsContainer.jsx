import React from 'react';

import {addPostAC,updatePostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState();    

    let addPost = ()=>{
       props.store.dispatch(addPostAC());
    }

    let updateNewPostText =(text)=>{
       props.store.dispatch(updatePostAC(text));
    }
  

   

    return (
        <MyPosts 
            posts={state.profilePage.posts} 
            value={state.profilePage.newPostValue} 
            addPost={addPost} 
            updateNewPostText={updateNewPostText}
        />    
    );



}

export default MyPostsContainer;