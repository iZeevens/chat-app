import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchChatMessages, sendMessageApi } from "../api/chatApi";
import { Message, Model } from "./type";
import { setSelectedChat } from "@features/chat-list/model/chatListSlice";

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
      const index = state.messages.findIndex(
        (msg) => msg.id === action.payload.id
      );
      if (index !== -1) {
        state.messages[index].content = action.payload.content;
      } else {
        state.messages.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSelectedChat, (state, action) => {
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
      });
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
