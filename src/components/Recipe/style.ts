import styled from "styled-components";

export const Container = styled.div`
  
    margin: 2rem auto;
    max-width: 60rem;
    background: var(--white);
    padding: 3rem 1.5rem 1.7rem;
    border-radius: 0.62rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    .recipe-title {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1rem;
    }

    .recipe-image, .description div:not(:last-child) {
        margin-bottom: 2rem;
    }

   figure.recipe-image {
        text-align: right;
        color: var(--gray-600);

        img {
            width: 100%;
            height: 15.62rem;
            object-fit: cover;
            border-radius: 0.62rem;
            margin-bottom: 5px;
        }

   }

   .description {
        .subtitle {
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .ingredients, .directions {
            line-height: 1.62rem;
            list-style-position: inside;
        }

       .ingredients {

       }

       .directions {
           
       }

       .info-add {

       }
   }
`;