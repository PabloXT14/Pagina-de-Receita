import { Footer } from "./components/Footer";
import { Recipe } from "./components/Recipe";
import { GlobalStyle } from "./styles/global";
import { RecipesProvider } from './Contexts/RecipesContext';

function App() {
  return (
    <RecipesProvider>
      <GlobalStyle />
      <Recipe />
      <Footer />
    </RecipesProvider>
  );
}

export default App;
