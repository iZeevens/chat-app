import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@app/store/store";
import {
  setSelectedChat,
  removeChat,
} from "@features/chat-list/model/chatListSlice";
import {
  ListItemContainer,
  ListItemContent,
  ListItemName,
  StyledTrashIcon,
  StyledSideBarChatIcon,
} from "./ChatListItem.styles";

interface IChatListItemProps {
  name: string;
  id: string;
}

export const ChatListItem = memo(({ name, id }: IChatListItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const selctedChatId = useSelector(
    (state: RootState) => state.chatList.selectedChatId
  );

  const handleClick = () => {
    dispatch(setSelectedChat(id));
  };

  const handleDelete = () => {
    dispatch(removeChat(id));
  };

  return (
    <ListItemContainer $isActive={selctedChatId === id} onClick={handleClick}>
      <ListItemContent>
        <StyledSideBarChatIcon />
        <ListItemName>{name}</ListItemName>
      </ListItemContent>
      <StyledTrashIcon onClick={handleDelete} />
    </ListItemContainer>
  );
});
