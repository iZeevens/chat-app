import { memo } from "react";
import {
  MessageContainer,
  Header,
  Main,
  Footer,
  Avatar,
  BotName,
  Badge,
  MessageBubble,
  Caps,
  Copy,
  Time,
} from "./BotMessage.styles";
import { models } from "@shared/index";
import { copyToClipboard } from "@features/lib/copyClipboard";

interface IBotMessageProps {
  modelName: string;
  modelLabel: string;
  content: string;
  createdAt: string;
}

export const BotMessage = memo(({
  modelName,
  modelLabel,
  content,
  createdAt,
}: IBotMessageProps) => {
  const model = models.find((m) => m.name === modelName);

  return (
    <MessageContainer>
      <Header>
        <BotName>{modelName}</BotName>
        <Badge>{modelLabel}</Badge>
      </Header>
      <Main>
        <Avatar>{model?.element}</Avatar>

        <MessageBubble>{content}</MessageBubble>
      </Main>
      <Footer>
        <Caps>-223 CAPS</Caps>
        <Copy onClick={() => copyToClipboard(content)} />
        <Time>
          {new Date(createdAt).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Time>
      </Footer>
    </MessageContainer>
  );
});
