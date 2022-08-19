import classes from "../../ShoppingList/NewProductForm.module.css";
import CustomInput from "../../../UI/CustomInput";
import {useContext, useRef, useState} from "react";
import RecipeContext from "../../../store/recipe-context";
import CustomButton from "../../../UI/CustomButton";

const IngredientsForm = () => {
    const recipeContext = useContext(RecipeContext);
    const [unit, setUnit] = useState();
    const [ingredient, setIngredient] = useState({});
    const nameRef =  useRef();
    const amountRef = useRef();

    const setUnitHandler = (e) => {
        // props.setUnit(e.target.value);
        setUnit(e.target.value);
    }

    const addIngredientHandler = (e) => {
        setIngredient({
            name: nameRef.current.value,
            amount: amountRef.current.value,
            unit: unit
        });
        e.preventDefault();
        recipeContext.addIngredient(ingredient);
    }

    return (
        <form onSubmit={addIngredientHandler}>
            <div className={classes['products__inputs']}>
                <CustomInput type='text' required label='Name of the product' ref={nameRef}/>
                <CustomInput type='number' required label='Amount' ref={amountRef}/>
                <div className={classes['select__container']}>
                    {/*todo custom select*/}
                    <select className={classes.select} onChange={setUnitHandler}>
                        <option value="">No unit</option>
                        <option value="g">Gram</option>
                        <option value="ml">Millilitre</option>
                        <option value="tsp">Teaspoon</option>
                        <option value="tbsp">Tablespoon</option>
                    </select>
                </div>
            </div>
            <CustomButton type='submit'>Submit</CustomButton>
        </form>
    )

}

export default IngredientsForm;
