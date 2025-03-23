import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSearchQuery, setSelectedChat, loadChats } from "./chatListSlice";
import { RootState } from "@app/store/store";
import { loadChatMessages } from "@features/chat/model/chatSlice";

export const chatListMiddleware = createListenerMiddleware();

chatListMiddleware.startListening({
  actionCreator: setSearchQuery,
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    listenerApi.dispatch(loadChats(state.chatList.searchQuery));
  },
});

chatListMiddleware.startListening({
  actionCreator: setSelectedChat, 
  effect: async (action, listenerApi) => {
    const chatId = action.payload;
    if (!chatId) return;

    listenerApi.dispatch(loadChatMessages(chatId));
  },
});
