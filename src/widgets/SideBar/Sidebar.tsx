import { SidebarContainer, Header, ChatControls } from "./Sidebar.styles";
import { LanguageSwitcher } from "@features/language";
import {
  AddChat,
  ChatSearch,
  ChatList,
  UserProfile,
} from "@features/chat-list";
import { useSidebar } from "@shared/hooks/useSideBar";
import { ToggleButtonUI } from "@shared/index";
import Logo from "@assets/logo.svg?react";

export const SideBar = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <SidebarContainer>
      <Header>
        <Logo />
        <LanguageSwitcher />
        <ToggleButtonUI onClick={toggleSidebar} isOpen={isSidebarOpen} />
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
