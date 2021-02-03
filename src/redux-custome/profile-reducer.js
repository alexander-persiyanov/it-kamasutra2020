const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const profileReducer = (state, action) => {
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
