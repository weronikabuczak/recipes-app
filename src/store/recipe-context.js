import React, {useState} from "react";

const RecipeContext = React.createContext({
    ingredients: [],
    addIngredient: (ingredient) =>  {},
    deleteIngredient: () => {}
});


export const RecipeContextProvider = (props) => {

    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = (ingredient) => {
        setIngredients(prevState => [...prevState, {ingredient}]);
        console.log(ingredients);
    }

    const deleteIngredientHandler = () => {}


    const contextValue = {
        ingredients: ingredients,
        addIngredient: addIngredientHandler,
        deleteIngredient: deleteIngredientHandler
    }

    return <RecipeContext.Provider value={contextValue}>
        {props.children}
    </RecipeContext.Provider>
}

export default RecipeContext;