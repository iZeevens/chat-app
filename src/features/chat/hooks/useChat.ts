import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@app/store/store";
import { loadChatMessages, addMessage } from "@features/chat/model/chatSlice";
import { subscribeToChatStream } from "../api/chatApi";

export const useChatMessages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentChatId = useSelector(
    (state: RootState) => state.chatList.selectedChatId
  );
  const messages = useSelector((state: RootState) => state.chat.messages);
  const loading = useSelector((state: RootState) => state.chat.loading);
  const error = useSelector((state: RootState) => state.chat.error);

  useEffect(() => {
    if (currentChatId) {
      dispatch(loadChatMessages(currentChatId));
    }
  }, [currentChatId, dispatch]);

  useEffect(() => {
    if (!currentChatId) return;

    const eventSource = subscribeToChatStream(currentChatId, (message) => {
      dispatch(addMessage(message));
    });

    return () => {
      eventSource.close();
    };
  }, [currentChatId, dispatch]);

  const sortedMessages = [...messages].sort((a, b) => {
    const timeDiff =
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    if (timeDiff === 0) {
      if (a.role === "user" && b.role === "assistant") return -1;
      if (a.role === "assistant" && b.role === "user") return 1;
    }
    return timeDiff;
  });

  return {
    sortedMessages,
    loading,
    error,
    currentChatId,
  };
};