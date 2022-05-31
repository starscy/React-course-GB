import { countReducer } from "../reducers/countReducer";
import {
  DELETE_CHAT,
  ADD_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  SEND_MESSAGE_ROBOT,
  GET_USERS,
  ADD_COUNT,
  SUB_COUNT,
  SET_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
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
export const getUsers = () => ({
  type: GET_USERS,
});
export const addCount = (count) => ({
  type: ADD_COUNT,
  payload: count,
});
export const subCount = (count) => ({
  type: SUB_COUNT,
  payload: count,
});
export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
export const showLoader = () => ({
  type: SHOW_LOADER,
});
export const hideLoader = () => ({
  type: HIDE_LOADER,
});
export const showError = (payload) => ({
  type: SHOW_ERROR,
  payload,
});
export const hideError = (payload) => ({
  type: HIDE_ERROR,
  payload,
});
