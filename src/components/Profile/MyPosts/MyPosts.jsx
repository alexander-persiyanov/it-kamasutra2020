import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
             My Posts
            <div>
               <textarea></textarea>
               <button>Add Post</button>
               <button>Remove</button>
            </div>
           

            <div className='s.posts'>
                {/* <div className={s.item}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>Post1
                
                </div>
                <div className={s.item}>Post2</div> */}
                <Post/>
                <Post/>
            </div>
        
        </div>
    );



}

export default  MyPosts;