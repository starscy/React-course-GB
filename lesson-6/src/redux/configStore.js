import { combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { messageReducer } from "./reducers/messageReducer";

export const store = createStore(
  combineReducers({
    chats: chatReducer,
    messages: messageReducer,
  }),
  composeWithDevTools()
);
