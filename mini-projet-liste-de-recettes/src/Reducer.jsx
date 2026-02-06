const recipesReducer = (state, action) => {
    if(action.type === "INIT")
    {
        let newState = Object.assign({}, state, { loading: true });

        return newState;
    }
    else if(action.type === "LOADED")
    {
        let newState = Object.assign({}, state, { loading: false, quotes : action.payload });
        return newState;
    }
    else if(action.type === "SHOWDETAIL") {
        //...let newState = Object.assign({}.. )
    }
}

export default recipesReducer;

