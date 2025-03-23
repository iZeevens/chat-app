import { Container, Content, Actions } from "./ChatWindow.styles";
import { ChatInput, ModelList } from "@features/chat";
import { useSidebar } from "@shared/hooks/useSideBar";
import { ToggleButtonUI } from "@shared/index";
import { MessagesList } from "@features/chat";

export const ChatWindow = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <Container>
      {!isSidebarOpen && (
        <ToggleButtonUI
          onClick={toggleSidebar}
          isOpen={isSidebarOpen}
          position="left"
        />
      )}

      <Content>
        <MessagesList />
        <Actions>
          <ModelList />
          <ChatInput />
        </Actions>
      </Content>
    </Container>
  );
};
