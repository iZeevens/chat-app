import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@app/store/store";
import { sendMessage } from "@features/chat/model/chatSlice";
import {
  ChatInputContainer,
  StyledChatInput,
  IconContainer,
} from "./ChatInput.styles";

import IconSend from "@assets/send.svg?react";

export const ChatInput = () => {
  const currentChatId = useSelector(
    (state: RootState) => state.chatList.selectedChatId
  );
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");

  const handleSendMsg = () => {
    if (!currentChatId || !query.trim()) return;

    dispatch(sendMessage({ chatId: currentChatId, message: query }));
    setQuery("");
  };

  return (
    <ChatInputContainer>
      <StyledChatInput
        placeholder="Спроси о чем-нибудь..."
        onChange={(e) => setQuery(e.currentTarget.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleSendMsg() : "")}
        value={query}
      />
      <IconContainer
        onClick={handleSendMsg}
      >
        <IconSend />
      </IconContainer>
    </ChatInputContainer>
  );
};
