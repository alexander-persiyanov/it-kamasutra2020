const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
  newPostValue: "new post",
  posts: [
    { id: 1, message: "My post1" },
    { id: 2, message: "Post 2" },
    { id: 3, message: "Post 3" },
  ],
};
const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost ={id: 4,message: state.newPostValue};
      return {...state, posts: [...state.posts,newPost],newPostValue: ""};

    case UPDATE_POST:
      return { ...state, newPostValue: action.newText };
    default:
      return state;
  }
};
//****-ACTIONS-****
export const addPostAC = () => {
  return { type: ADD_POST };
};

export const updatePostAC = (newText) => {
  return { type: UPDATE_POST, newText: newText };
};

export default profileReducer;
