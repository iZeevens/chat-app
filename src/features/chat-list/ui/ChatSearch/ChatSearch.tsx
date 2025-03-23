import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@app/store/store";
import { setSearchQuery } from "@features/chat-list/model/chatListSlice";
import { StyledButton, SearchInput, SearchContainer } from "./ChatSearch.styles";
import SearchIcon from "@assets/subtract.svg?react";

export const ChatSearch = () => {
  const dipsatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(
    (state: RootState) => state.chatList.searchQuery
  );
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      dipsatch(setSearchQuery(query));
    }, 2000);

    return () => clearTimeout(handler);
  }, [query, dipsatch]);

  return (
    <SearchContainer>
      <StyledButton variant="outline" onClick={() => setIsOpen((prev) => !prev)}>
        <SearchIcon />
      </StyledButton>
      <SearchInput
        $isOpen={isOpen}
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
      />
    </SearchContainer>
  );
};
