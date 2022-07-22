import classes from './IngredientsInfo.module.css';
import CustomButton from "../../../../UI/CustomButton";
import {useState} from "react";

const IngredientsInfo = ({ingredients}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const selectIngredient = (name, amount, e) => {
        if (e.target.checked) {
            const ingredientExists = selectedIngredients.some(ingredient => ingredient.name === name);
            if (ingredientExists) {
                return
            }
            setSelectedIngredients([{name, amount}, ...selectedIngredients]);
        } else if (!e.target.checked) {
            const newSelectedIngredients = selectedIngredients.filter(ingredient => ingredient.name !== name);
            setSelectedIngredients(newSelectedIngredients);
        }
    }

    return (
        <div className={classes.ingredients}>
            <header className={classes.header}>
                Ingredients
                <CustomButton confirmation>Create shopping list</CustomButton>
            </header>
            <ul className={classes.ingredients__list}>
                {ingredients && Object.keys(ingredients).map((key, item) => (
                    <div>
                        {/*<input type={"checkbox"} onClick={() => selectIngredient(key, ingredients[key])}/>*/}
                        <input type={"checkbox"} onClick={(e) => selectIngredient(key, ingredients[key], e)}/>
                        <li key={key}>
                            {key}
                            <span className={classes.quantity}>
                            {ingredients[key]}
                        </span>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsInfo;