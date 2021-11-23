import React from 'react';
import Spinner from '../../Commons/Spinner/Spinner';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import defaultImgProfile from '../../../assets/images/default-avatar-icon.png' 
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = ({profile,status,updateStatus,...props}) => {

    //first render haven't data  
    if (!profile) {
        return <Spinner></Spinner>;
    }

    return (
        <div className={s.profileInfo}>
            {/* <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" /> */}

            <div>
                {/* <ProfileStatusWithHooks  status={status} updateStatus={updateStatus}/ > */}
                <ProfileStatus status={status} updateStatus={updateStatus}></ProfileStatus>
            </div>
            <div className={s.profileInfoContainer}>
               
                <div>
                    {profile.photos.large ? ( <img className={s.avatar} src={profile.photos.large} alt="" />) : 
                        ( <img className={s.avatar} src={defaultImgProfile} alt="" />)
                    }
                   
                </div>
                <div>
                    {profile.userId}
                </div>
                <div>
                    {profile.fullName}
                </div>
                <div className={s.description}>
                    {profile.aboutMe}
                </div>
                <div>
                    {profile.lookingForAJobDescription}
                </div>

            </div>



        </div>
    );



}

export default ProfileInfo;