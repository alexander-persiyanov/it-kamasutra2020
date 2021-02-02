const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
  //_private (method or variable)
  _state: {
    profilePage: {
      newPostValue: "new post",
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
      newMessageBody:"",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostValue,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostValue = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST) {
      this._state.profilePage.newPostValue = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_MESSAGE_BODY ){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);

    }
    else if(action.type === SEND_MESSAGE ){
      let body = this._state.dialogsPage.newMessageBody;
      let newMessage = { id: 4, message: body };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageBody="";

      this._callSubscriber(this._state);

    }
  },
};

export const addPostAC = ()=>{
  return {type:ADD_POST};
};

export const updatePostAC = (newText)=>{
  return {type:UPDATE_POST,newText:newText,};
};

export const sendMessageAC = ()=>{
  return {type:SEND_MESSAGE};
};
export const updateNewMessageBodyAC = (body)=>{
  return {type:UPDATE_NEW_MESSAGE_BODY,body:body};
};

export default store;
window.store = store;
