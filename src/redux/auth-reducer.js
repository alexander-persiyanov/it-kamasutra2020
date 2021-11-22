//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/

import { authAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";


let initialState = {
  userId: null,
  email:null,
  login:null,
  isAuth:false,
  errors:null,
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
  return async (dispatch)=>{
  let response = await authAPI.me();
  
  if(response.resultCode === 0){
    //destructurization
    let {id,login,email} = response.data;
    dispatch(setAuthUserData(id,email,login,true));

  }
   

  };
};


export const login = (email,password,rememberMe,setSubmitting,setErrors,setStatus) => {
  return async (dispatch)=>{
     let response = await authAPI.login(email,password,rememberMe);
   
      if(response.resultCode === 0){
       
        dispatch(getAuthUserData());
        setSubmitting(false);
       
      }
      // else if(data.resultCode == 1){
        
      //   console.dir(data);
      //   setErrors({ password: data.messages[0], email: data.messages[0], });
      //   // setStatus({msg:data.messages[0]});
      //   setSubmitting(false);
      //    

      // }
      else if(response.resultCode !== 0){
        // console.dir(data);
       
        setStatus({msg:response.messages[0]});
        setSubmitting(false);
      }
      
      
   

  };
};

export const logout = () => {
  return async (dispatch)=>{
    let response  = await authAPI.logout();
    
     
    if(response.resultCode === 0){
      
      dispatch(setAuthUserData(null,null,null,false));

    }
   

  };
};




export default authReducer;
