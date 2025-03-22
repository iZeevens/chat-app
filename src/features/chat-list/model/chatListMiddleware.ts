import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSearchQuery, loadChats } from "./chatListSlice";
import { RootState } from "@app/store/store";

export const chatListMiddleware = createListenerMiddleware();

chatListMiddleware.startListening({
  actionCreator: setSearchQuery,
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    listenerApi.dispatch(loadChats(state.chatList.searchQuery));
  },
});
