import { createContext, ReactNode, useEffect, useState } from 'react';
import recipeImage from '../assets/images/waffle-recipe-img.png';


const RECIPE_WAFFLE_FAKE: Recipe = {
    title: "🧇 Waffle Clássico",
    caption: "Receita de waffle clássico",
    ingredients: [
        "2 xícaras(chá) de farinha de trigo",
        "2 colher(sopa) de açúcar",
        "2 colheres(chá) de fermento em pó",
        "1/2 colher(chá) de sal",
        "2 colheres amido de milho",
        "3 ovos batidos",
        "4 colheres(sopa) de manteiga sem sal derretida",
        "1 e 3/4 de xícara(chá) de leite",
        "1 colher(sopa) de essência de baunilha"
    ],
    directions: [
        "Peneire em um recipiente a farinha de trigo, o açúcar, o amido, o fermento e o sal. Reserve.",
        "Em outro recipiente misture os ovos batidos com o leite, a manteiga derretida e a essência de baunilha",
        "Despeje sobre a mistura de farinha e rapidamente incorpore os ingredientes",
        "Aqueça o aparelho para Waffles. Coloque uma concha rasa de massa e espalhe até cobrir o molde do aparelho, feche a tampa e deixe assar até a massa ficar bem dourada.",
        "Retire com espátulas de silicone. Sirva com mel, frutas ou geleia."
    ],
    add_info: "Você poderá servir estes Waffles no café da manhã com geleia.",
}


interface Recipe {
    title: string;
    caption: string;
    ingredients: Array<string>;
    directions: Array<string>;
    add_info: string;
}

interface RecipesProviderProps {
    children: ReactNode;
}

// Contexto
export const RecipesContext = createContext<Recipe[]>([]);


// Componente para setar valor inicial do Context e atribui uma var state para salvar as receitas
export function RecipesProvider({ children }: RecipesProviderProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    // Buscando ou colocando valore inicial do state recipe
    useEffect(() => {
        // setRecipes([...recipes, RECIPE_WAFFLE_FAKE]);
        setRecipes([RECIPE_WAFFLE_FAKE]);
    }, []);



    return (
        <RecipesContext.Provider value={recipes}>
            {children}
        </RecipesContext.Provider>
    );
}