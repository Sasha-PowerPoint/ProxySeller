import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font: 1.2em "Ysabeau SC", sans-serif !important;
    }

    // Rodal modal restyling

    .albums-modal .rodal-dialog {
        @media screen and (max-width: 850px) {
            width: calc(100% - 40px) !important;
        }
    }
`;

export default GlobalStyle;