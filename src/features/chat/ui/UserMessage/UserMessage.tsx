import { memo } from "react";
import { copyToClipboard } from "@features/lib/copyClipboard";
import {
  UserMessageContainer,
  MessageBubble,
  MessageText,
  MessageTime,
  Avatar,
  Copy,
} from "./UserMessage.styles";

interface IUserMessageProps {
  content: string;
  createdAt: string;
}

export const UserMessage = memo(({ content, createdAt }: IUserMessageProps) => {
  return (
    <UserMessageContainer>
      <Copy onClick={() => copyToClipboard(content)} />
      <MessageBubble>
        <MessageText>{content}</MessageText>
        <MessageTime>
          {new Date(createdAt).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </MessageTime>
      </MessageBubble>
      <Avatar />
    </UserMessageContainer>
  );
});
