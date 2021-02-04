const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Roberta" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hou are you?" },
    { id: 3, message: "Thanks, im good and you?" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {...state, newMessageBody:action.bodyMessage};
     
     
    case SEND_MESSAGE:
     
      let body = state.newMessageBody;
      
      return  { 
        ...state,
        newMessageBody:'',
        messages:[...state.messages,{ id: 4, message: body }],
      };
     
     
    default:
      return state;
  }
};

//****-ACTIONS-****
export const sendMessageAC = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyAC = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, bodyMessage: body };
};

export default dialogReducer;
