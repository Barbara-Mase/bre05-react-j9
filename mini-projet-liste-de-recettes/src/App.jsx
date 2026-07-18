import './App.css'
import { useReducer, useEffect } from 'react';
import recipesReducer from './Reducer.jsx';
import RecipesList from './RecipesList.jsx'
import RecipeDetail from './RecipeDetail.jsx'

function App() {
  const [state, dispatch] = useReducer(recipesReducer, { recipes: [], loading: false });

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch({ type: 'INIT' });

      const response = await fetch('https://dummyjson.com/recipes?limit=9');
      const result = await response.json();

      dispatch({ type: 'LOADED', payload: result.recipes });
    };

    fetchRecipes();
  }, []);

  if (state.loading === true) {
    return (
        <>
          <p>Chargement...</p>
        </>
    );
  } else if (state.selectedRecipe) {
    return (
    <RecipeDetail
      recipe={state.selectedRecipe}
      back={() => dispatch({type: "BACK_TO_LIST"})}/>
  );
  
  } else {
    return ( 
    <RecipesList recipes={state.recipes} 
    selectRecipe={(recipe) => dispatch({ type: 'DETAIL', payload: recipe })}/>
    );
    }
}

export default App

