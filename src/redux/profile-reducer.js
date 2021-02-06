const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState = {
  newPostValue: "new post",
  posts: [
    { id: 1, message: "My post1" },
    { id: 2, message: "Post 2" },
    { id: 3, message: "Post 3" },
  ],
  profileId:2,
  profile:null,
};
const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:{
      let newPost ={id: 4,message: state.newPostValue};
      return {...state, posts: [...state.posts,newPost],newPostValue: ""};

    }
    case UPDATE_POST:{
      return { ...state, newPostValue: action.newText };
    }
    case SET_USER_PROFILE:{
      
      return { ...state, profile: action.profile };
    }
      

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

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile};
};



export default profileReducer;
