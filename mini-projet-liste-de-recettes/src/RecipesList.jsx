const RecipesList = ({ recipes }) => {
    return (
        <main className="recipe-grid">
            {recipes.map((recipe, i) => (
                <article className="recipe-card" key={i}>
                    <div className="card-image">
                        <h3>{recipe.name}</h3>
                        <div className="card-meta">
                            <span>{recipe.cookTimeMinutes}</span>
                            <span>{recipe.caloriesPerServing}</span>
                        </div>
                        <div className="card-footer">
                            <span className="difficulty medium">{recipe.difficulty}</span>
                            <button className="btn-details">Voir la recette</button>
                        </div>
                    </div>
                </article>
            ))}
        </main>
    )
}

export default RecipesList;