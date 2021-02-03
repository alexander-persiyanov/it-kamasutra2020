import React from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';
import {addPostAC,updatePostAC} from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPostHandle = ()=>{
       
        props.dispatch(addPostAC());
       
    }

    let updatePostHandle =()=>{
       
        let  text = newPostElement.current.value;
        props.dispatch(updatePostAC(text));


    }
  

    let postsMap = props.posts.map((postItem) => { return <Post message={postItem.message} id={postItem.id} /> });

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.value?props.value:''} onChange={updatePostHandle}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandle}>Add Post</button>
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