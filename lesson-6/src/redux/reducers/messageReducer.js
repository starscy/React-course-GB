import { SEND_MESSAGE, ADD_CHAT } from "../actionType";

const initialState = {
  messages: {
    id11: [{ text: "FirstMessageHereToo!Chat1", author: "AUTHOR-1" }],
    id22: [{ text: "FirstMessageHereToo!Chat2", author: "AUTHOR-2" }],
    id33: [{ text: "FirstMessageHereToo!Chat3", author: "AUTHOR-3" }],
    id44: [{ text: "FirstMessageHereToo!Chat4", author: "AUTHOR-4" }],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        messages: { ...state.messages, [`id${action.payload.id}`]: [] },
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [Object.keys(action.payload)]: [
            ...state.messages[Object.keys(action.payload)],
            Object.values(action.payload)[0],
          ],
        },
      };
    default:
      return state;
  }
};

/*

 return {
        ...state,
        messages: {
          ...state.messages,
          [Object.keys(action.payload)]: Object.values(action.payload),
        },
      };

*/
