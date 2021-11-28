import React, { useState } from 'react';
import Spinner from '../../Commons/Spinner/Spinner';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import defaultImgProfile from '../../../assets/images/default-avatar-icon.png' 
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile,...props}) => {

    const [editMode,setEditMode] = useState(false);

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

    const goToEditMode = (value)=>{
        setEditMode(value);

    }
    const onSubmit = (values,setStatus,setErrors)=>{
        saveProfile(values,setStatus,setErrors).then(
            ()=>{
                //if saveProfile return promise resolve (without error from api )
                setEditMode(false);
            }
        );
       

        // alert(JSON.stringify(values));
        // new Promise(r => setTimeout(()=>{alert(JSON.stringify(values))}, 500));
       
    }

   console.log(profile);
    return (
        <div className={s.profileInfo}>
            {/* <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" /> */}

           
            <div className={s.profileInfoContainer}>
                <div>
                    {profile.photos.large ? ( <img className={s.avatar} src={profile.photos.large} alt="" />) : 
                        ( <img className={s.avatar} src={defaultImgProfile} alt="" />)
                    }
                    {isOwner && (<div><input type="file" onChange={(e)=>{onMainPhotoSelected(e)}}/></div>)}
                   
                </div>
                <div>
                    {/* <ProfileStatusWithHooks  status={status} updateStatus={updateStatus}/ > */}
                    {isOwner?(<ProfileStatus status={status} updateStatus={updateStatus}></ProfileStatus>):(<div>{status}</div>)} 
                
                </div>
               
               
               {editMode ? 
                <ProfileDataForm profile={profile} handleSubmit={onSubmit}/> : 
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>goToEditMode(true)}/> 
                }
               
               

            </div>



        </div>
    );
}

const ProfileData = ({profile,isOwner,goToEditMode})=>{

    return( 
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
            </div>
        
            <div>
                <b>User Id:</b>{profile.userId}
            </div>
            <div>
                <b>Full name:</b>{profile.fullName}
            </div>
            <div>
                <b>About me:</b>{profile.aboutMe}
            </div>
            <div>
                <b>Looking for job:</b>{profile.lookingForAJob?"yes":"no"}
            </div>
            {profile.lookingForAJob?(<div> <b>Skills:</b>:{ profile.lookingForAJobDescription}</div>):""}
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map((key,index)=><Contact contactTitle={key} contactValue={profile.contacts[key]} key={index}></Contact>)}
            </div>
        </div>

    
    );
}


const Contact = ({contactTitle,contactValue})=>{
    return <div> <b>{contactTitle}</b>:{contactValue}</div>

}

export default ProfileInfo;