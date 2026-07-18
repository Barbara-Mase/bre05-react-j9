const RecipeDetail = ({recipe, back}) => {

    return (
            <div className="container">
                <button onClick={back} className="btn-back">← Retour à la liste</button>
                <section className="recipe-detail">
                    <div className="detail-header">
                        <img src={recipe.image} alt={recipe.name}/>
                        <div className="detail-title-block">
                            <h1>{recipe.name}</h1>
                            <div className="tags">
                                {recipe.tags.map((tag, i)  => (<span key={i}>{tag}</span>))}
                            </div>
                        </div>
                    </div>
                    <div className="detail-grid">
                        <div className="detail-main">
                            <section>
                                <h2>Instructions</h2>
                                <ol className="instructions-list">
                                    {recipe.instructions.map((instruction, i)  => (<li key={i}>{instruction}</li>))}
                                </ol>
                            </section>
                        </div>
                        <aside className="detail-sidebar">
                            <div className="info-card">
                                <h3>Informations</h3>
                                <p><strong>Difficulté :</strong> {recipe.difficulty}</p>
                                <p><strong>Portions :</strong> {recipe.servings}</p>
                                <p><strong>Calories :</strong> {recipe.caloriesPerServing}</p>
                                <p><strong>Note :</strong> {recipe.rating} {recipe.reviewCount}</p>
                            </div>
    
                            <div className="ingredients-card">
                                <h3>Ingrédients</h3>
                                <ul className="ingredients-list">
                                   {recipe.ingredients.map((ingredient, i)  => (<li key={i}>{ingredient}</li>))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
    )
}

export default RecipeDetail