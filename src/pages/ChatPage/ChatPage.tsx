import { Container } from "./ChatPage.styles";
import { SideBar } from "@widgets/SideBar/Sidebar";
import { ChatWindow } from "@widgets/ChatWindow/ChatWindow";

export function ChatPage() {
  return (
    <Container>
      <SideBar />
      <ChatWindow />
    </Container>
  );
}
