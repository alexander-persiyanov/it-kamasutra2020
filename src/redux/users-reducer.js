//****************--USing Users API--> https://social-network.samuraijs.com/  --***********/
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  users: [],
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
        //users incolla due arrays users essistenti(...state.users) con users arrivati(...action.users)
        return{...state,users:[...state.users,...action.users]};

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

export default usersReducer;
