import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@shared/index";
import { theme } from "@shared/index";
import "normalize.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppRouter></AppRouter>
    </ThemeProvider>
  );
}

export default App;
