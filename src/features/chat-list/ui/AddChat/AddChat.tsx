import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store/store";
import { createChat } from "@features/chat-list/model/chatListSlice";
import { AddButton } from "./AddChat.styles";
import AddButtonIcon from "@assets/add-chat.svg?react";

export const AddChat = () => {
  const dipsatch = useDispatch<AppDispatch>();

  const handleAddChat = () => {
    dipsatch(createChat("New Chat"));
  };

  return (
    <AddButton onClick={handleAddChat}>
      <AddButtonIcon />
    </AddButton>
  );
};
