import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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
      newMessageBody: "",
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
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action);

    this._callSubscriber(this._state);
    
  },
};

export default store;
window.store = store;
