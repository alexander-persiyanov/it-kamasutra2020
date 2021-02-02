let store = {
 
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
    },
  },
  getState(){
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostValue,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostValue = "";

    this._callSubscriber();
  },
  changePost(newText) {
    this._state.profilePage.newPostValue = newText;
    this._callSubscriber();
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
