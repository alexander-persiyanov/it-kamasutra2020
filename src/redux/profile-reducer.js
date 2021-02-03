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
      let newPost = {
        id: 4,
        message: state.newPostValue,
      };

      state.posts.push(newPost);
      state.newPostValue = "";
      return state;
    case UPDATE_POST:
      state.newPostValue = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostAC = () => {
  return { type: ADD_POST };
};

export const updatePostAC = (newText) => {
  return { type: UPDATE_POST, newText: newText };
};

export default profileReducer;
