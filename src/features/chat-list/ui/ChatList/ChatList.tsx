import { ChatListContainer } from "./ChatList.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@app/store/store";
import { loadChats } from "@features/chat-list/model/chatListSlice";
import { ChatListItem } from "../ChatListItem/ChatListItem";

export const ChatList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chats, loading, error } = useSelector(
    (state: RootState) => state.chatList
  );

  useEffect(() => {
    dispatch(loadChats(""));
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ChatListContainer>
      {chats.data ? (
        chats.data.map((chat) => (
          <ChatListItem key={chat.id} name={chat.name} id={chat.id} />
        ))
      ) : (
        <span>Нет Чатов</span>
      )}
    </ChatListContainer>
  );
};
