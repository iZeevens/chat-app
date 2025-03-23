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
  onMessage: (message: Message) => void
) => {
  let eventSource: EventSourcePolyfill | null = null;
  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;
  const initialReconnectDelay = 1000;
  const maxReconnectDelay = 30000;

  const connect = () => {
    eventSource = new EventSourcePolyfill(
      `https://bothubq.com/api/v2/chat/${chatId}/stream`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_API_TOKEN}`,
        },
      }
    );

    eventSource.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      if (
        parsedData.name === "MESSAGE_UPDATE" ||
        parsedData.name === "MESSAGE_CREATE"
      ) {
        const message = parsedData.data.message;
        onMessage(message);
      }
    };

    eventSource.onerror = () => {
      eventSource?.close();
      
      if (reconnectAttempts < maxReconnectAttempts) {
        reconnectAttempts++;
        const delay = Math.min(
          initialReconnectDelay * Math.pow(2, reconnectAttempts),
          maxReconnectDelay
        );
        setTimeout(connect, delay);
      } else {
        console.error(
          "Превышено максимальное количество попыток переподключения."
        );
      }
    };
  };

  connect();

  return {
    close: () => {
      eventSource?.close();
    },
  };
};