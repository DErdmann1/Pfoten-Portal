import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #E5D3B3;
  --color-header: #333333;
  --color-footer: #987554;

  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-primary);
  }
`;

export default GlobalStyle;
