//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/

import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
  userId: null,
  email:null,
  login:null,
  isAuth:false,
};
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:{
     
      return {...state,...action.payload,isAuth:action.payload.isAuth};

    }
     

    default:
      return state;
  }
};
//****-ACTIONS-****
export const setAuthUserData = (userId,email,login,isAuth) => {
  return { type: SET_USER_DATA, payload:{ userId,email,login,isAuth } };
};

//****-THUNK_ACTIONS-****
export const getAuthUserData = () => {
  return (dispatch)=>{
    authAPI.me().then((data)=>{
      if(data.resultCode === 0){
        //destructurization
        let {id,login,email} = data.data;
        dispatch(setAuthUserData(id,email,login,true));

      }
    });

  };
};


export const login = (email,password,rememberMe) => {
  return (dispatch)=>{
    authAPI.login(email,password,rememberMe).then((data)=>{
   
      if(data.resultCode === 0){
       
        dispatch(getAuthUserData());

      }
    });

  };
};

export const logout = () => {
  return (dispatch)=>{
    authAPI.logout().then((data)=>{
     
      if(data.resultCode === 0){
       
        dispatch(setAuthUserData(null,null,null,false));

      }
    });

  };
};




export default authReducer;
