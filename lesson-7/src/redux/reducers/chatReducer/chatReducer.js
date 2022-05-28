import { ADD_CHAT, DELETE_CHAT } from "../../actions/actionType";

const initialState = {
  chats: [
    {
      name: "Chat with robot",

      id: 11,
    },
    {
      name: "Chat-2",

      id: 22,
    },
    {
      name: "Chat-3",

      id: 33,
    },
    {
      name: "Chat-4",

      id: 44,
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      };
    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };

    default:
      return state;
  }
};
