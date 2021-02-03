const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogReducer = (state, action) => {
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
