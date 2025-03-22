import { api } from "@shared/api/instance";
import { Chat, Chats } from "./types";

export const fetchChats = async (search: string) => {
  const response = await api.get<Chats>("/chat/list", {
    params: { search },
  });
  return response.data;
};

export const addChat = async (name: string) => {
  const response = await api.post<Chat>("/chat", { name });
  return response;
};

export const removeChatApi = async (id: string) => {
  const response = await api.delete(`/chat/${id}`);

  return response;
};
