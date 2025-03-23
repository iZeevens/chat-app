import { useEffect, useRef } from "react";
import { MessagesContainer } from "./MessagesList.styles";
import { useChatMessages } from "@features/chat/hooks/useChat";
import { BotMessage } from "../BotMessage/BotMessage";
import { UserMessage } from "../UserMessage/UserMessage";
import { SpinnerLoaderUI, ErrorUI } from "@shared/index";

export const MessagesList = () => {
  const { currentChatId, sortedMessages, loading, error } = useChatMessages();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [sortedMessages]);

  return (
    <MessagesContainer ref={messagesEndRef}>
      {loading ? (
        <SpinnerLoaderUI />
      ) : error ? (
        <ErrorUI message={error} />
      ) : sortedMessages.length > 0 ? (
        <>
          {sortedMessages.map((message) =>
            message.role === "assistant" ? (
              <BotMessage
                key={message.id}
                modelName={
                  message.model.parent
                    ? message.model.parent.label
                    : message.model.label
                }
                modelLabel={message.model_id}
                content={message.content}
                createdAt={message.created_at}
              />
            ) : (
              <UserMessage
                key={message.id}
                content={message.content}
                createdAt={message.created_at}
              />
            )
          )}
        </>
      ) : currentChatId ? (
        <span>Нет сообщений</span>
      ) : (
        <span>Выберите чат</span>
      )}
    </MessagesContainer>
  );
};
