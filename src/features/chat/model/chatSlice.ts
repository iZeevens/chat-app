import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchChatMessages, sendMessageApi } from "../api/chatApi";
import { Message, Model } from "./type";
import { setSelctedChat } from "@features/chat-list/model/chatListSlice";

interface ChatState {
  messages: Message[];
  models: Model[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  models: [],
  loading: false,
  error: null,
};

export const loadChatMessages = createAsyncThunk(
  "chat/loadMessages",
  async (chatId: string) => {
    const messages = await fetchChatMessages(chatId);
    return messages;
  }
);

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async ({ chatId, message }: { chatId: string; message: string }) => {
    const newMessage = await sendMessageApi(chatId, message);
    return newMessage;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSelctedChat, (state, action) => {
        if (action.payload) {
          state.messages = [];
          state.loading = true;
        } else {
          state.messages = [];
          state.loading = false;
        }
      })
      .addCase(loadChatMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadChatMessages.fulfilled, (state, action) => {
        state.messages = action.payload.data;
        state.loading = false;
      })
      .addCase(loadChatMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки сообщений";
      })
    // .addCase(loadModels.fulfilled, (state, action) => {
    //   state.models = action.payload;
    // })
    // .addCase(updateChat.fulfilled, (state, action) => {
    //   // Обновляем текущий чат, если он выбран
    //   if (state.currentChatId === action.payload.id) {
    //     state.messages = action.payload.messages || state.messages;
    //   }
    // });
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
