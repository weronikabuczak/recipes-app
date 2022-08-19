import classes from './NewRecipe.module.css';
import CustomInput from "../../../UI/CustomInput";
import IngredientsForm from "./IngredientsForm";
import {useRef, useState} from "react";
import CustomButton from "../../../UI/CustomButton";

const NewRecipe = () => {
    const nameRef = useRef();
    const amountRef = useRef();
    const [ingredients, setIngredients] = useState({});
    console.log(ingredients);


    return (
        <section className={classes.card}>
            <h1>Here you can add your own recipe</h1>
            <form className={classes.form}>
                <div>
                    <CustomInput label="Name" required type="text" maxLength='30'/>
                </div>
                <div>
                    <CustomInput label="Short description" required type="text" maxLength='50'/>
                </div>
                <div className={classes['select__container']}>
                    <select className={classes.select}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <CustomInput label="Time" required type="text" maxLength='50'/>
                </div>
                <div>
                    <CustomInput label="Preparation" required type="text" maxLength='400'/>
                </div>

                {/*    todo image   */}
            </form>
            <div>
                <ul>
                    {ingredients && Object.keys(ingredients).map((key) => (
                        <li className={classes.list}>
                            {key} - {ingredients[key]}
                            <button className={classes['deleteIngredient__button']}>Delete</button>
                        </li>
                    ))}
                </ul>
                <IngredientsForm setIngredients={setIngredients}/>
            </div>
        </section>

    )
}

export default NewRecipe;