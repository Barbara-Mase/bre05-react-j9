import './App.css'

function App() {
  
  const [state, dispatch] = useReducer(recipesReducer, {recipes: [], showDetail: false, loading: false})
  
  useEffect(() = (props) => { 
    
    const fetchRecipes = async () => {
      dispatch({type: 'INIT'});
      let response = await fetch('https://dummyjson.com/recipes?limit=9');
      const result = await response.json();
      dispatch({type: 'LOADED', payload: result.recipes})
    };
    
    fetchRecipes();
  }, []);
  
  function showDetail() {
    dispatch({type: 'SHOWDETAIL'})
  }
  
    if(state.loading) {
      return (
        <p>Chargement...</p>
        )
    } else if (!state.loading) {
      return (
        <Recipes />
        )
    } else if (showDetail)
    {
    return (
      <RecipeDetail />
    )
  }

export default App

