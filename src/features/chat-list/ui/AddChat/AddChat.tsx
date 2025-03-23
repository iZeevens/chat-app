import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store/store";
import { createChat } from "@features/chat-list/model/chatListSlice";
import { ButtonUI } from "@shared/ui/ButtonUI/ButtonUI";
import AddButtonIcon from "@assets/add-chat.svg?react";

export const AddChat = () => {
  const dipsatch = useDispatch<AppDispatch>();

  const handleAddChat = () => {
    dipsatch(createChat("New Chat"));
  };

  return (
    <ButtonUI onClick={handleAddChat}>
      <AddButtonIcon />
    </ButtonUI>
  );
};
