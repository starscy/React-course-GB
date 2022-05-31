import { getUsers } from "../actions/actions";
import {
  GET_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  SET_USERS,
} from "../actions/actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: null,
      };
    case GET_USERS:
      return {
        ...state,
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export const loadApiReducer = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  return await request.json();
};
