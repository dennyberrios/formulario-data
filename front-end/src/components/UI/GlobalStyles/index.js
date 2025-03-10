import { createGlobalStyle } from "styled-components";
import { theme } from "../Theme/theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.5;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    input, button {
        outline: none;
    }
`;
