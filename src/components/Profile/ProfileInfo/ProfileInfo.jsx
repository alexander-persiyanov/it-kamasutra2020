import React from 'react';
import Spinner from '../../Commons/Spinner/Spinner';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import defaultImgProfile from '../../../assets/images/default-avatar-icon.png' 
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,...props}) => {

    //first render haven't data  
    if (!profile) {
        return <Spinner></Spinner>;
    }
    const onMainPhotoSelected = (e)=>{
        if(e.target.files.length){
            let file = e.target.files[0];
            savePhoto(file);
          

        }
       
    }
    console.log(profile);
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
                    {isOwner && (<div><input type="file" onChange={(e)=>{onMainPhotoSelected(e)}}/></div>)}
                   
                </div>
                <div>
                    <b>User Id:</b>{profile.userId}
                </div>
                <div>
                    <b>Full name:</b>{profile.fullName}
                </div>
                <div className={s.description}>
                    <b>About me:</b>{profile.aboutMe}
                </div>
                <div>
                    <b>Looking for job:</b>{profile.lookingForAJob?"yes":"no"}
                </div>
               
                {profile.lookingForAJobDescription?(<div> <b>Looking for job:</b>: profile.lookingForAJobDescription</div>):""}
                   
               

            </div>



        </div>
    );



}

export default ProfileInfo;