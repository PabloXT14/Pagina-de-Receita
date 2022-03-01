import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #8257E6;
        --white: #FFFFFF;

        --black-800: #121214;
        --gray-600: #7C7C8A;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;/*15px*/
        }

        @media (max-width: 720px) {
            font-size: 87.5%;/*14px*/
        }
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        -webkit-font-smooth: antialiased; 
    }

    body::-webkit-scrollbar {
        width: 6px;
        /* margin-right: 6px; */
    }

    body::-webkit-scrollbar-thumb {
        background: var(--gray-600);
        border-radius: 3px;
    }
`;