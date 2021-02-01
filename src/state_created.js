import {rerenderEntireTree} from './rerender';

let state = {
  profilePage: {
    newPostValue:'new post',
    posts: [
      { id: 1, message: "My post1" },
      { id: 2, message: "Post 2" },
      { id: 3, message: "Post 3" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Ivan" },
      { id: 3, name: "Roberta" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hou are you?" },
      { id: 3, message: "Thanks, im good and you?" },
    ],
  },
};

export let addPost = ()=>{

  let newPost = {
    id:4,
    message:state.profilePage.newPostValue,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostValue = '' ;
 
  rerenderEntireTree();

};

export let changePost = (postChanged)=>{

  

  state.profilePage.newPostValue = postChanged ;
 
  rerenderEntireTree();

};

export default state;
