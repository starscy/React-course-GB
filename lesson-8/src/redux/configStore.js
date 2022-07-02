import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./reducers/saga";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { apiReducer } from "./reducers/apiReducer";
import { countReducer } from "./reducers/countReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  chats: chatReducer,
  messages: messageReducer,
  users: apiReducer,
  count: countReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
