import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.regular};
    color: white;
    background-color: ${({ theme }) => theme.backgrounds.background};
    width: 100%;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, p {
    margin: 0
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
    font-weight: bold;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: bold;
  }
`;
