import { authAPI } from "../api/api";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
  initialized: false,
  
};
const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:{
     
      return {...state,initialized:true};

    }
     

    default:
      return state;
  }
};
//****-ACTIONS-****
export const initializedSuccess = () => {
  return { type: INITIALIZED_SUCCESS };
};

//****-THUNK_ACTIONS-****
export const initializeApp = () => {
  return (dispatch)=>{
    let promise = dispatch(getAuthUserData());
   
   // Promise.all([promise]) when all promises resolved does then
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess());
    });

  };
};




export default appReducer;
