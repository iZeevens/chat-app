import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { SidebarProvider } from "@shared/context/SidebarContext";
import { GlobalStyles } from "@shared/index";
import { theme } from "@shared/index";
import "normalize.css";

function App() {
  return (
    <StoreProvider>
      <SidebarProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <AppRouter></AppRouter>
        </ThemeProvider>
      </SidebarProvider>
    </StoreProvider>
  );
}

export default App;
