export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
  chat_id: string;
  model: Model;
  model_id: string;
}

export interface Model {
  id: string;
  label: string;
  parent: {
    id: string;
    label: string;
  };
}

export interface ChatMessagesResponse {
  data: Message[];
  pages: number;
}

export interface ModelsResponse {
  data: Model[];
}

export interface SendMessageResponse {
  message: Message;
}

export interface UserMessageProps {
  content: string;
}

export interface BotMessageProps {
  modelName: string;
  content: string;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}
