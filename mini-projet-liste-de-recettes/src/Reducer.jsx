const recipesReducer = (state, action) => {
    if (action.type === "INIT") {
        let newState = Object.assign({}, state, { loading: true });
        return newState;
    }
    else if (action.type === "LOADED") {
        let newState = Object.assign({}, state, { loading: false, recipes: action.payload });
        return newState;
    } else if (action.type === "DETAIL") {
        let newState = Object.assign({}, state, {selectedRecipe : action.payload});
        return newState;
    } else if (action.type === "BACK_TO_LIST") {
        let newState = Object.assign({}, state, {selectedRecipe: null });
        return newState;
    }
    return state; 
}

export default recipesReducer;

