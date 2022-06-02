import { countReducer } from "../reducers/countReducer";
import * as types from "./actionType";
import { auth } from "../firebase";

export const deleteChat = (chatId) => ({
  type: types.DELETE_CHAT,
  payload: chatId,
});
export const addChat = (createdChat) => ({
  type: types.ADD_CHAT,
  payload: createdChat,
});
export const deleteMessage = (messageObject) => ({
  type: types.DELETE_MESSAGE,
  payload: messageObject,
});
export const sendMessage = (messageObj) => ({
  type: types.SEND_MESSAGE,
  payload: messageObj,
});
export const sendMessageRobot = (messageObj) => ({
  type: types.SEND_MESSAGE_ROBOT,
  payload: messageObj,
});
export const getUsers = () => ({
  type: types.GET_USERS,
});
export const addCount = (count) => ({
  type: types.ADD_COUNT,
  payload: count,
});
export const subCount = (count) => ({
  type: types.SUB_COUNT,
  payload: count,
});
export const setUsers = (payload) => ({
  type: types.SET_USERS,
  payload,
});
export const showLoader = () => ({
  type: types.SHOW_LOADER,
});
export const hideLoader = () => ({
  type: types.HIDE_LOADER,
});
export const showError = (payload) => ({
  type: types.SHOW_ERROR,
  payload,
});
export const hideError = (payload) => ({
  type: types.HIDE_ERROR,
  payload,
});

export const registerStart = () => ({
  type: types.REGISTER_START,
});
export const registerSucces = (payload) => ({
  type: types.REGISTER_SUCCES,
  payload,
});
export const registerError = (payload) => ({
  type: types.REGISTER_ERROR,
  payload,
});

export const loginStart = () => ({
  type: types.LOGIN_START,
});
export const loginSucces = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
export const loginError = (payload) => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const logoutStart = () => ({
  type: types.LOGOUT_START,
});
export const logoutSucces = () => ({
  type: types.LOGOUT_SUCCESS,
});
export const logoutError = (payload) => ({
  type: types.LOGOUT_ERROR,
  payload,
});

export const registerInitiate = (name, email, password) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({ name });
        dispatch(registerSucces(user));
      })
      .catch((err) => dispatch(registerError(err.message)));
  };
};
