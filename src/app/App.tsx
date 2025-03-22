import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./providers/StoreProvider";
import { GlobalStyles } from "@shared/index";
import { theme } from "@shared/index";
import "normalize.css";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <AppRouter></AppRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
