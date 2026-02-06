const RecipesList = (props) => {
    return (
        <>
        {recipes.map((recipe, i) => 
        <RecipeItem key={i} recipes={recipes} showDetail={props.showDetail}>)}
    )
}