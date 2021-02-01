import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>

            <ProfileInfo></ProfileInfo>
            <MyPosts posts={props.state.profilePage.posts}></MyPosts>


        </div>
    );



}

export default Profile;