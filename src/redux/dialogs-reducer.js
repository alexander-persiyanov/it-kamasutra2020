const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState ={
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

}

const dialogReducer = (state = initialState, action) => {
let stateCopy = {...state};
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let newMessage = { id: 4, message: body };

      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = "";

      return stateCopy;
    default:
        return state;
  }

};

export const sendMessageAC = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyAC = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogReducer;
