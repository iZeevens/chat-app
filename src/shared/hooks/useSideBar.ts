import { useContext, createContext } from "react";
import { SidebarContextProps } from "@shared/context/SidebarContext";

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};
