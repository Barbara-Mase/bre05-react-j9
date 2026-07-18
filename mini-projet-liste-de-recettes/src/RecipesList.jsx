const RecipesList = ({recipes, selectRecipe}) => {
       return (
            <div className="container">
                <header className="header">
                    <h1>Nos Recettes Gourmandes</h1>
                    <p>Découvrez des plats savoureux pour toutes les occasions.</p>
                </header>
            <main className="recipe-grid">
                {recipes.map((recipe, i) => (
                    <article className="recipe-card" key={i}>
                        <div className="card-image">
                        <img src={recipe.image} alt={recipe.name}/>
                        </div>
                            <h3>{recipe.name}</h3>
                            <div className="card-meta">
                                <span>{recipe.cookTimeMinutes}</span>
                                <span>{recipe.caloriesPerServing}</span>
                            </div>
                            <div className="card-footer">
                                <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>{recipe.difficulty}</span>
                                <button onClick={() => selectRecipe(recipe)} className="btn-details">Voir la recette</button>
                            </div>
                    </article>
                ))}
                </main>
             </div>
    )
}

export default RecipesList;