import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {


    let postsData = [
        { id: 1, message: "My post1", },
        { id: 2, message: "Post 2", },
        { id: 3, message: "Post 3", },
    ];

    let postsMap = postsData.map((postItem) => { return <Post message={postItem.message} id={postItem.id} /> });

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