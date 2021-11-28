//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/

import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_SUCCESS = "samurai-network/auth/GET_CAPTCHA_SUCCESS";
const GET_CAPTCHA_REMOVE = "samurai-network/auth/GET_CAPTCHA_REMOVE";



let initialState = {
  userId: null,
  email:null,
  login:null,
  isAuth:false,
  errors:null,
  captchaUrl:null,
};
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:{
     
      return {...state,...action.payload,isAuth:action.payload.isAuth};

    }
    case GET_CAPTCHA_SUCCESS:{
      return{...state ,captchaUrl:action.payload.captchaUrl};
    }
    case GET_CAPTCHA_REMOVE:{
      return{...state ,captchaUrl:null};
    }
     

    default:
      return state;
  }
};
//****-ACTIONS-****
export const setAuthUserData = (userId,email,login,isAuth) => {
  return { type: SET_USER_DATA, payload:{ userId,email,login,isAuth } };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return { type: GET_CAPTCHA_SUCCESS, payload:{captchaUrl} };
};
export const getCaptchaUrlRemove = () => {
  return { type:GET_CAPTCHA_REMOVE };
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


export const login = (email,password,rememberMe,captcha,setSubmitting,setErrors,setStatus) => {
  return async (dispatch)=>{
     let response = await authAPI.login(email,password,rememberMe,captcha);
   
      if(response.resultCode === 0){
       
        dispatch(getAuthUserData());
        setSubmitting(false);
        dispatch(getCaptchaUrlRemove());
       
      }else {
        if(response.resultCode === 10){
          dispatch(getCaptchaUrl());

          if(response.fieldsErrors.length>0){
            setErrors({[response.fieldsErrors[0].field]:response.fieldsErrors[0].error});
          }
          
         
        }
        setStatus({msg:response.messages[0]});
        setSubmitting(false);
      

      }

       // else if(data.resultCode == 1){
        
      //   console.dir(data);
      //   setErrors({ password: data.messages[0], email: data.messages[0], });
      //   // setStatus({msg:data.messages[0]});
      //   setSubmitting(false);
      //    

      // }
    
  };
};



export const getCaptchaUrl = () => {
  return async (dispatch)=>{
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));

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
