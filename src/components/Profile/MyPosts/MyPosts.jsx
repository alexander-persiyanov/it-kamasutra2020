import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>

            </div>


            <div className={s.posts}>
                {/* <div className={s.item}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>Post1
                
                </div>
                <div className={s.item}>Post2</div> */}
                <Post message='post1' />
                <Post message='post2' />
            </div>

        </div>
    );



}

export default MyPosts;