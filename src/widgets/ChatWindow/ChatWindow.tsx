import { Container, Content, Messages, Actions } from "./ChatWindow.styles";
import { ChatInput, ModelList, UserMessage, BotMessage } from "@features/chat";
import { useChatMessages } from "@features/chat/hooks/useChat";

export const ChatWindow = () => {
  const { sortedMessages, loading, error, currentChatId } = useChatMessages();

  return (
    <Container>
      <Content>
        <Messages>
          {sortedMessages ?
            sortedMessages.map((message) =>
              message.role === "assistant" ? (
                <BotMessage
                  key={message.id}
                  modelName={message.model.parent.label}
                  modelLabel={message.model.label}
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
            ) : <span>Нет Сообщений</span>}
        </Messages>
        <Actions>
          <ModelList />
          <ChatInput />
        </Actions>
      </Content>
    </Container>
  );
};
