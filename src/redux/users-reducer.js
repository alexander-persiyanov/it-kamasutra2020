
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  defaultAvatar:'https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png',
  users: [
    { id: 1, avatar:'https://pbs.twimg.com/profile_images/378800000707840978/5e87156c85a61a0c1c545233e6dd65d8_400x400.jpeg', followed:true, fullname: "FullName",status:"status",location:{city:"Italy",country:"Milan"}},
    { id: 2, avatar:'', followed:true, fullname: "FullName2",status:"status2",location:{city:"Russia",country:"Moscow"}},
    { id: 3, avatar:'', followed:false, fullname: "FullName3",status:"status3",location:{city:"Cina ",country:"Pikin"}},
  ],
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
