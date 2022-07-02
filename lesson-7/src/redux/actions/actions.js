import {
  DELETE_CHAT,
  ADD_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  SEND_MESSAGE_ROBOT,
} from "./actionType";

export const deleteChat = (chatId) => ({ type: DELETE_CHAT, payload: chatId });
export const addChat = (createdChat) => ({
  type: ADD_CHAT,
  payload: createdChat,
});
export const deleteMessage = (messageObject) => ({
  type: DELETE_MESSAGE,
  payload: messageObject,
});
export const sendMessage = (messageObj) => ({
  type: SEND_MESSAGE,
  payload: messageObj,
});
export const sendMessageRobot = (messageObj) => ({
  type: SEND_MESSAGE_ROBOT,
  payload: messageObj,
});
