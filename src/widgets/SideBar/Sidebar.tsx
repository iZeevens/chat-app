import { SidebarContainer, Header, ChatControls } from "./Sidebar.styles";
import { LanguageSwitcher } from "@features/language";
import { AddChat, ChatSearch, ChatList, UserProfile } from "@features/chat-list";
import Logo from "@assets/logo.svg?react";

export const SideBar = () => {
  return (
    <SidebarContainer>
      <Header>
        <Logo />
        <LanguageSwitcher />
      </Header>
      <ChatControls>
        <AddChat />
        <ChatSearch />
      </ChatControls>
      <ChatList />
      <UserProfile />
    </SidebarContainer>
  );
};
