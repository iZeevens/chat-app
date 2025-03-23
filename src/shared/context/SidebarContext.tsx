import { useState, ReactNode } from "react";
import { SidebarContext } from "@shared/hooks/useSideBar";

export interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
