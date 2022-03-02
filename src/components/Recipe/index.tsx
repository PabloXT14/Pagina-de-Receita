import { Container } from "./style";
import RecipeImg from '../../assets/images/waffle-recipe-img.jpg';

interface RecipeProps {
    title: string;
    ingredients: Array<string>;
    directions: Array<string>
    add_info: string;
}


export function Recipe() {
    return (
        <Container className="recipe-container">
            <h1 className="recipe-title">🧇 Waffle Clássico</h1>
            <figure className="recipe-image">
                <img src={RecipeImg} alt="Imagem de Waffle" />
                <figcaption>Receita de waffle clássico</figcaption>
            </figure>
            <div className="description">
                <div className="ingredients">
                    <h2 className="subtitle">Ingredientes</h2>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="directions">
                    <h2 className="subtitle">Modo de preparo</h2>
                    <ol>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                </div>
                <div className="info-add">
                    <h2 className="subtitle">Informações Adicionais</h2>
                    <p>Você poderá servir estes Waffles no café da manhã com geleia.</p>
                </div>
            </div>
        </Container>
    );
}