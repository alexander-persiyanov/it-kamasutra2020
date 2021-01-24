import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
            </div>
            <div>
                ava + discription 
            </div>
            <div>
                My Posts
            </div>
            <div>
                New Post
            </div>
            <div>
                <div className={s.item}>Item1</div>
                <div className={s.item}>Item2</div>
            </div>
        
        </div>
    );



}

export default  Profile;