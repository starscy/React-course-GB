import {
  SEND_MESSAGE,
  ADD_CHAT,
  DELETE_MESSAGE,
  SEND_MESSAGE_ROBOT,
} from "../../actions/actionType";

const initialState = {
  messages: {
    id11: [{ text: "FirstMessageHereToo!Chat1", author: "AUTHOR-1", id: 111 }],
    id22: [{ text: "FirstMessageHereToo!Chat2", author: "AUTHOR-2", id: 222 }],
    id33: [{ text: "FirstMessageHereToo!Chat3", author: "AUTHOR-3", id: 333 }],
    id44: [{ text: "FirstMessageHereToo!Chat4", author: "AUTHOR-4", id: 4444 }],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        messages: {
          ...state.messages,
          [`id${action.payload.id}`]: [
            {
              text: `Welcome to ${action.payload.name}`,
              author: "ROBOT",
              id: 1,
            },
          ],
        },
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
    case DELETE_MESSAGE:
      const chatId = `id${Object.keys(action.payload).join("")}`;
      const messageId = Object.values(action.payload).join("");

      console.log(messageId, "messageId");
      return {
        ...state,
        messages: {
          ...state.messages,
          [`${chatId}`]: state.messages[chatId].filter(
            (item) => item.id != messageId
          ),
        },
      };

    case SEND_MESSAGE_ROBOT:
      const randomMessage = "Привет";
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
