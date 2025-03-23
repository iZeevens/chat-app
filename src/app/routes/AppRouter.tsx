import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@pages/LoginPage/LoginPage";
import { ChatPage } from "@pages/ChatPage/ChatPage";
import { useAuth } from "@features/auth";
import { NotFound } from "@pages/NotFound/NotFound";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export function AppRouter() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/chats" : "/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/chats"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
