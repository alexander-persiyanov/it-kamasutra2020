import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST ="DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
    case SAVE_PHOTO_SUCCESS:{
    
      return {...state,profile:{...state.profile,photos:action.photos}};
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
export const savePhotoSuccess = (photos) => {
  return { type: SAVE_PHOTO_SUCCESS, photos };
};




export const getUserProfile = (userId) => {
  
  return async (dispatch) => {
    let response = await usersAPI.getProfileData(userId);
    dispatch(setUserProfile(response));
    
  };
};

export const getStatus = (userId) => {
  
  return async(dispatch) => {
   
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
  
  };
};

export const updateStatus = (status) => {
  
  return async(dispatch) => {
   
    let response = await profileAPI.updateStatus(status);

    if(response.resultCode === 0 ){
     
      dispatch(setStatus(status));
    

    }
     
    
  };
};


export const savePhoto = (file)=>{
  return async (dispatch)=>{
    let data = await profileAPI.savePhoto(file);
   
    if(data.resultCode === 0 ){
      //put return data.photos
      let photos = data.data.photos;
   
      dispatch(savePhotoSuccess(photos));
    }


  }
}

export default profileReducer;
