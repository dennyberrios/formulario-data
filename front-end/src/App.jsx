import { GlobalStyle } from "./components/UI/GlobalStyles";
import RoutesApp from "./routes";
import { theme } from "./components/UI/Theme/theme";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./Context/context";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
