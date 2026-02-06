const RecipeDetail = (props) => {
    return (
        <div class="container">
            <button class="btn-back">← Retour à la liste</button>
            <section class="recipe-detail">
                <div class="detail-header">
                    <img src={props.image} alt={props.alt}>
                    <div class="detail-title-block">
                        <h1>{props.name}</h1>
                        <div class="tags">
                            {tags.map...}
                        </div>
                    </div>
                </div>
                <div class="detail-grid">
                    <div class="detail-main">
                        <section class="detail-main">
                            <h2>Instructions</h2>
                            <ol class="instructions-list">
                                <data.map ....etc>
                            </ol>
                        </section>
                    </div>
                    <aside class="detail-sidebar">
                        <div class="info-card">
                            <h3>Informations</h3>
                            <p><strong>Difficulté :</strong>{props.difficulty}</p>
                            <p><strong>Portions :</strong>{props.nombredepersonne}</p>
                            <p><strong>Calories :</strong>{props.calorie}</p>
                            <p><strong>Note :</strong>{props.note} {props.nombredavis}</p>
                        </div>

                        <div class="ingredients-card">
                            <h3>Ingrédients</h3>
                            <ul class="ingredients-list">
                               {ingredients.map dans des li...}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
                
    )
}

export default RecipeDetail