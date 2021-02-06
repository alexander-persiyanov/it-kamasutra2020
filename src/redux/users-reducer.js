//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [],
  pageSize:5,
  totalUsersCount:0,
  currentPage:1,
};
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
     return{
       ...state,
        users:state.users.map(
          (userItem)=>{   
            if(action.userId === userItem.id){
              return {...userItem,followed:true}
            }
            return userItem;
          }
        )
      };

    case UNFOLLOW:{
      return{
        ...state,
         users:state.users.map(
           (userItem)=>{   
             if(action.userId === userItem.id){
               return {...userItem,followed:false}
             }
             return userItem;
           }
         )
       };
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
         
    default:
      return state;
  }
};
//****-ACTIONS-****
export const followAC = (userId) => {
  return { type: FOLLOW, userId:userId };
};

export const unfollowAC = (userId) => {
  return { type: UNFOLLOW,userId:userId };
};

export const setUsersAC = (users) => {
  return { type: SET_USERS,users:users };
};

export const setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE,currentPage:currentPage };
};

export const setTotalUsersCountAC = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT,totalUsersCount:totalCount };
};



export default usersReducer;
