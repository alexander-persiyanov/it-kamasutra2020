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
     
      return {...state,...action.data,isAuth:true};

    }
     

    default:
      return state;
  }
};
//****-ACTIONS-****
export const setAuthUserData = (userId,email,login) => {
  return { type: SET_USER_DATA, data:{ userId,email,login } };
};

//****-THUNK_ACTIONS-****
export const getAuthUserData = () => {
  return (dispatch)=>{
    authAPI.me().then((data)=>{
      if(data.resultCode === 0){
        //destructurization
        let {id,login,email} = data.data;
        dispatch(setAuthUserData(id,email,login));

      }
    });

  };
};




export default authReducer;
