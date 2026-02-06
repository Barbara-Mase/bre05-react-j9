const RecipeItem = (props) => {
    
    function handleClick() {
        event.prevetDefault()
        props.showDetail(props.recipes)
        
    }
    return (
        <>
            <article class="recipe-grid">
                <div class="card-image">
                    <img src={props.recipes.images} alt={props.recipes.name}>
                    <span class="badge">{props.recipes.cuisine}</span>
                </div>
                <div class="card-content">
                    <h3>{props.recipes.name}</h3>
                    <div class="card-meta">
                        <span>{props.recipes.prepTimeMinutes}</span>
                        <span>{props.recipes.caloriesPerServing}</span>
                    </div>
                    <div class="card-footer">
                        <span class="difficulty easy">{props.recipes.difficulty}</span>
                        <button class="btn-details" onClick={handleClick}>Voir la recette</button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default RecipeItem