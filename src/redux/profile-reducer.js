import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST ="DELETE_POST";

let initialState = {
  newPostValue: "new post",
  posts: [
    { id: 1, message: "My post1" },
    { id: 2, message: "Post 2" },
    { id: 3, message: "Post 3" },
  ],
  profileId: 2,
  profile: null,
  status:"",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 4, message: action.text };
      return { ...state, posts: [...state.posts, newPost], newPostValue: "" };
    }
    case DELETE_POST:{
      return {...state,posts:state.posts.filter(post=>post.id!=action.postId)}
    }
    case UPDATE_POST: {
      return { ...state, newPostValue: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS:{
      return {...state,status:action.status};
    }

    default:
      return state;
  }
};
//****-ACTIONS-****
export const addPostAC = (text) => {
  return { type: ADD_POST,text:text };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST,postId:postId };
};

export const updatePostAC = (newText) => {
  return { type: UPDATE_POST, newText: newText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};




export const getUserProfile = (userId) => {
  
  return (dispatch) => {
    usersAPI.getProfileData(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  
  return (dispatch) => {
   
    profileAPI.getStatus(userId).then((status) => {
      dispatch(setStatus(status));
    });
  };
};

export const updateStatus = (status) => {
  
  return (dispatch) => {
   
    profileAPI.updateStatus(status).then((response) => {
    
      if(response.resultCode === 0 ){
        dispatch(setStatus(status));

      }
     
    });
  };
};

export default profileReducer;
