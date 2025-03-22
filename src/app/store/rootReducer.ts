import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "@features/language/model/languageSlice";
import chatListReducer from "@features/chat-list/model/chatListSlice";
import chatReducer from "@features/chat/model/chatSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  chatList: chatListReducer,
  chat: chatReducer,
});

export default rootReducer;
