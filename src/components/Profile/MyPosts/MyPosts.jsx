import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';

import Post from './Post/Post';



class MyPosts extends PureComponent  {

    
    
render(){
//    console.log("RENDER");
    let newPostElement = React.createRef();

    let addPostHandle = ()=>{
        let  text = newPostElement.current.value;
      this.props.addPost(text);
       
    }

    let updatePostHandle =()=>{
       
        let  text = newPostElement.current.value;
       this.props.updateNewPostText(text);


    }
  

    let postsMap = this.props.posts.map((postItem) => { return <Post message={postItem.message} id={postItem.id} key={postItem.id}/> });
     return (
      
        <div className={s.postsBlock}>
           
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={this.props.newTextPost?this.props.newTextPost:''} onChange={updatePostHandle}></textarea>
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
};
   



}

export default MyPosts;