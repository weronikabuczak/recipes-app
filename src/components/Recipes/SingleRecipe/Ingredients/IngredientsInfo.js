import classes from './IngredientsInfo.module.css';
import CustomButton from "../../../../UI/CustomButton";
import {useEffect, useState} from "react";
import IngredientsForm from "./IngredientsForm";

const IngredientsInfo = ({ingredients}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const [showIngredientsForm, setShowIngredientsForm] = useState(false);

    const showIngredientsFormHandler = () => {
        // dispatch action to send stuff to firebase
        setShowIngredientsForm(prevState => !prevState);
    }

    useEffect(() => {

    }, [selectedIngredients]);

    const selectIngredient = (name, amount, e) => {
        if (e.target.checked) {
            for (const ing of selectedIngredients) {
                if (Object.values(ing).includes(name)) {
                    return
                }
            }
            setSelectedIngredients([{name, amount}, ...selectedIngredients]);
            console.log(selectedIngredients);
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
            {showIngredientsForm && <IngredientsForm setShowIngredientsForm={setShowIngredientsForm}/>}
        </div>
    )
}

export default IngredientsInfo;