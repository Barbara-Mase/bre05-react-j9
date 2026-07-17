import './App.css'
import { useReducer, useEffect } from 'react';
import recipesReducer from './Reducer.jsx';
import RecipesList from './RecipesList.jsx'

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
  } else {
    return ( <RecipesList recipes={state.recipes} />
    )
      }
}

export default App

