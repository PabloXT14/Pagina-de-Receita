import { Container } from "./style";
import RecipeImg from '../../assets/images/waffle-recipe-img.jpg';


export function Recipe() {
    return (
        <Container>
            <h1>Waffle Clássico</h1>
            <figure>
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