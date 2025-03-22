import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { chatListMiddleware } from "@features/chat-list/model/chatListMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(chatListMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
