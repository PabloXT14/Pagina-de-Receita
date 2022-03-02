import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #8257E6;
        --white: #FFFFFF;/* background da receita */
        
        --black-900: #1B1B1B;/* titulos e subtitulos */

        --gray-100: #EAEAEA;
        --gray-600: #8F8F8F;/* footer e legenda img */
        --gray-900: #39393A;/* outros */
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
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased; 
    }

    body {
        background: var(--gray-100);
        color: var(--gray-900);

        h1 {
            font-size: 1.74rem;
            color: var(--black-900);
        }

        h2, h3, h4 {
            font-size: 1.25rem;
            color: var(--black-900);
        }

        ul, ol, p {
            font-size: 1rem;
        }

        footer, figcaption {
            font-size: 0.75rem;
            color: var(--gray-600);
        }
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