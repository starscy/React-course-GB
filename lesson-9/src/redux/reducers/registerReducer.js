import * as types from "../actions/actionType";

const initialState = {
  user: "",
  loading: false,
  error: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCES:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
