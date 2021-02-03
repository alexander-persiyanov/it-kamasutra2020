const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState ={
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

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let newMessage = { id: 4, message: body };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
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
