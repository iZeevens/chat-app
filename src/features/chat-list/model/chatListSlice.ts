import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ChatListState } from "../api/types";
import { fetchChats, addChat, removeChatApi } from "../api/chatListApi";

const initialState: ChatListState = {
  chats: {
    data: [],
    pages: 1,
  },
  selectedChatId: null,
  searchQuery: "",
  loading: false,
  error: null,
};

export const loadChats = createAsyncThunk("chatList/loadChats", async (search: string) => {
  const response = await fetchChats(search);
  return response;
});

export const createChat = createAsyncThunk(
  "chatList/createChat",
  async (name: string) => {
    const response = await addChat(name);
    return response.data;
  }
);

export const removeChat = createAsyncThunk(
  "chatList/removeChat",
  async (id: string) => {
    const response = await removeChatApi(id);
    return response.data;
  }
);

const chatListSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSelctedChat(state, action: PayloadAction<string | null>) {
      state.selectedChatId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadChats.fulfilled, (state, action) => {
        state.chats.data = action.payload.data;
        state.chats.pages = action.payload.pages;
        state.loading = false;
      })
      .addCase(loadChats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки чатов";
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chats.data.push(action.payload);
      })
      .addCase(removeChat.fulfilled, (state, action) => {
        state.chats.data = state.chats.data.filter(
          (item) => item.id !== action.meta.arg
        );
      });
  },
});

export const { setSearchQuery, setSelctedChat } = chatListSlice.actions;
export default chatListSlice.reducer;
