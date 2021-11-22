import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize:10,
  totalUsersCount:0,
  currentPage:1,
  isFetching:false,
  followingInProgress:[],
};
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
   
    case FOLLOW:
      
     return{...state,users: updateObjectInArray(state.users,action.userId,"id",{followed:true})};

    case UNFOLLOW:{
      
      return{...state,users: updateObjectInArray(state.users,action.userId,"id",{followed:false})};

      // return{
      //   ...state,
      //    users:state.users.map(
      //      (userItem)=>{   
      //        if(action.userId === userItem.id){
      //          return {...userItem,followed:false}
      //        }
      //        return userItem;
      //      }
      //    )
      //  };
      }
      case SET_USERS:{
        //users incolla due arrays users essistenti(...state.users) con users arrivati(...action.users)->  {...state,users:[...state.users,...action.users]}
        return{...state,users:[...action.users]};

      }
      case SET_CURRENT_PAGE:{
        return{...state,currentPage:action.currentPage};
        
      }
      case SET_TOTAL_USERS_COUNT:{
        return {...state,totalUsersCount:action.totalUsersCount};
      }
      case TOGGLE_IS_FETCHING:{

        return{...state,isFetching:action.isFetching}; 

      }
      case FOLLOWING_IN_PROGRESS:{
        return{
          ...state,
          followingInProgress: action.isFetching 
          ?[...state.followingInProgress,action.userId]
          :state.followingInProgress.filter(id => id != action.userId)
        }
      }
         
    default:
      return state;
  }
};






//****-ACTIONS-****
export const followSuccess = (userId) => {
  return { type: FOLLOW, userId:userId };
};

export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW,userId:userId };
};

export const setUsers = (users) => {
  return { type: SET_USERS,users:users };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE,currentPage:currentPage };
};

export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT,totalUsersCount:totalCount };
};


export const toggleIsFetching = (isFetching)=>{
  return { type:TOGGLE_IS_FETCHING,isFetching};
}

export const toggleFollowingInProgress = (isFetching,userId)=>{
  return {type:FOLLOWING_IN_PROGRESS,isFetching,userId};
}



//** Functions utility   */

const followUnfollowFlow = async(dispatch,userId,apiMethod,actionCreator)=>{

  dispatch(toggleFollowingInProgress(true,userId));
  let data = await apiMethod(userId);
  
            
  if (data.resultCode == 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleFollowingInProgress(false,userId));
  }
  
}

//****-THUNK--CREATORS-****
export const requestUsers = (page,pageSize)=>{
  //****-THUNK-****
  return async(dispatch)=>{
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page,pageSize);
 
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
       
   
  }; 
}

export const follow = (userId)=>{
  return async (dispatch)=>{
    let apiMethod = usersAPI.follow.bind(usersAPI);
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch,userId,apiMethod,actionCreator);

   
  }; 
}

export const unfollow = (userId)=>{
  return async(dispatch)=>{
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;

    followUnfollowFlow(dispatch,userId,apiMethod,actionCreator);

    
  }; 
}

export default usersReducer;
