import { GlobalStyle } from "./components/UI/GlobalStyles";
import RoutesApp from "./routes";
import { theme } from './components/UI/Theme/theme';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;