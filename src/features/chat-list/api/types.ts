export interface Chat {
  id: string;
  name: string;
}

export interface Chats {
  data: Chat[];
  pages: number;
}

export interface ChatListState {
  chats: Chats;
  selectedChatId: string | null;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}
