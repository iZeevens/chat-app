import { Container } from "./ChatPage.styles";
import { SideBar } from "@widgets/SideBar/Sidebar";
import { ChatWindow } from "@widgets/ChatWindow/ChatWindow";
import { useSidebar } from "@shared/hooks/useSideBar";

export function ChatPage() {
  const { isSidebarOpen } = useSidebar();

  return (
    <Container>
      {isSidebarOpen && <SideBar />}
      <ChatWindow />
    </Container>
  );
}
