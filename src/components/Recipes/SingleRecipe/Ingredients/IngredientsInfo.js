import classes from './IngredientsInfo.module.css';
import CustomButton from "../../../../UI/CustomButton";
import {useState} from "react";
import useHttp from "../../../../hooks/use-http";
import {useContext} from "react";
import AuthContext from "../../../../store/auth-context";
import LoadingSpinner from "../../../../UI/LoadingSpinner";

const IngredientsInfo = ({ingredients}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ingredientsSent, setIngredientsSent] = useState(false);
    const {isLoading, errorMessage, sendRequest: addIngredients} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const localId = authContext.localId;

    const addIngredientsHandler = () => {
        for (const ingredient of selectedIngredients) {
            addIngredients({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/${localId}/products.json?auth=${token}`,
                method: 'POST',
                body: ingredient,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        setIngredientsSent(true);
    }

    const selectIngredient = (name, amount, e) => {
        const splitAmountAndUnit = amount.split(' ');
        const splitAmount = splitAmountAndUnit[0];
        const splitUnit = splitAmountAndUnit[1];
        if (e.target.checked) {
            const ingredientExists = selectedIngredients.some(ingredient => ingredient.name === name);
            if (ingredientExists) {
                return
            }
            setSelectedIngredients([{name, amount: +splitAmount, unit: splitUnit}, ...selectedIngredients]);
        } else if (!e.target.checked) {
            const newSelectedIngredients = selectedIngredients.filter(ingredient => ingredient.name !== name);
            setSelectedIngredients(newSelectedIngredients);
        }
    }

    return (
        <div className={classes.ingredients}>
            {isLoading && <LoadingSpinner/>}
            {ingredientsSent && <p>Ingredients have been sent successfully!</p>}
            <header className={classes.header}>
                Ingredients
                <CustomButton className={classes['ingredients__button']} confirmation onClick={addIngredientsHandler}>Add ingredients to shopping
                    list</CustomButton>
            </header>
            <ul className={classes.ingredients__list}>
                {ingredients && Object.keys(ingredients).map((key) => (
                    <div>
                        <input type="checkbox"
                               onClick={(e) => selectIngredient(key, ingredients[key], e)}/>

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