import { Container } from "./style";
import RecipeImg from '../../assets/images/waffle-recipe-img.jpg';
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";


export function Recipe() {
    const recipes = useContext(RecipesContext);

    return (
        <>
            {recipes.map((recipe, index) => {
                return (
                    <Container key={index} className="recipe-container">
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <figure className="recipe-image">
                            <img src={RecipeImg} alt="Imagem de Waffle" />
                            <figcaption>{recipe.caption}</figcaption>
                        </figure>
                        <div className="description">
                            <div className="ingredients">
                                <h2 className="subtitle">Ingredientes</h2>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) =>
                                        <li key={index}>{ingredient}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="directions">
                                <h2 className="subtitle">Modo de preparo</h2>
                                <ol>
                                    {recipe.directions.map((direction, index) =>
                                        <li key={index}>{direction}</li>)
                                    }
                                </ol>
                            </div>
                            <div className="info-add">
                                <h2 className="subtitle">Informações Adicionais</h2>
                                <p>Você poderá servir estes Waffles no café da manhã com geleia.</p>
                            </div>
                        </div>
                    </Container>
                );
            })}
        </>
    );
}