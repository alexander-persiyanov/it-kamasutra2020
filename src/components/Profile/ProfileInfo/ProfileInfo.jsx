import React from 'react';
import Spinner from '../../Commons/Spinner/Spinner';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    //first render haven't data  
    if (!props.profile) {
        return <Spinner></Spinner>;
    }

    return (
        <div className={s.profileInfo}>
            {/* <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" /> */}

            <div>
                <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/ >
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}></ProfileStatus> */}
            </div>
            <div className={s.profileInfoContainer}>
               
                <div>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div>
                    {props.profile.userId}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <div className={s.description}>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>

            </div>



        </div>
    );



}

export default ProfileInfo;