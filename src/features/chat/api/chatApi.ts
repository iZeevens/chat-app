import { api } from "@shared/api/instance";
import { EventSourcePolyfill } from "event-source-polyfill";
import { ChatMessagesResponse, Message } from "../model/type";

export const fetchChatMessages = async (id: string) => {
  const response = await api.get<ChatMessagesResponse>(`/chat/${id}/messages`);

  return response.data;
};

export const sendMessageApi = async (chatId: string, message: string) => {
  const response = await api.post<Message>(`/message/send`, {
    chatId,
    message,
  });

  return response.data;
};

export const subscribeToChatStream = (
  chatId: string,
  onMessage: (message: ChatMessagesResponse) => void
) => {
  const eventSource = new EventSourcePolyfill(
    `https://bothubq.com/api/v2/chat/${chatId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_API_TOKEN}`,
      },
    }
  );

  eventSource.onmessage = (event) => {
    const message: ChatMessagesResponse = JSON.parse(event.data);
    onMessage(message);
    console.log(message)
  };

  eventSource.onerror = () => {
    eventSource.close();
  };

  return eventSource;
};

// export const fetchModels = async (parentId: string) => {
//   const response = await api.get(`/model/list`, {
//     params: { parentId },
//   });
//   return response.data;
// };

// export const updateChat = async (
//   chatId: string,
//   data: { name?: string; modelId?: string }
// ) => {
//   const response = await api.patch(`/chat/${chatId}`, data);
//   return response.data;
// };
