import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {


  

    let postsMap = props.posts.map((postItem) => { return <Post message={postItem.message} id={postItem.id} /> });

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
                
                {postsMap}
            </div>

        </div>
    );



}

export default MyPosts;