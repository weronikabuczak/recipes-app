import classes from './NewRecipe.module.css';
import CustomInput from "../../../UI/CustomInput";
import IngredientsForm from "./IngredientsForm";
import {useRef, useState} from "react";
import CustomButton from "../../../UI/CustomButton";
import useHttp from "../../../hooks/use-http";
import {useContext} from "react";
import AuthContext from "../../../store/auth-context";
import {useHistory} from "react-router-dom";

const NewRecipe = () => {
    const {isLoading, errorMessage, sendRequest: addRecipe} = useHttp();
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const token = authContext.token;
    const nameRef = useRef();
    const descRef = useRef();
    const hoursRef = useRef();
    const minutesRef = useRef();
    const prepRef = useRef();
    const imageRef = useRef();
    const [diff, setDiff] = useState();
    const [ingredients, setIngredients] = useState({});

    const deleteIngredientHandler = (key) => {
        delete ingredients[key];
    }

    const setDiffHandler = (e) => {
        setDiff(e.target.value);
    }

    const receiveData = () => {
        history.replace('/recipes');
    }

    const addRecipeHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const desc = nameRef.current.value;
        const preparation = prepRef.current.value;
        const img = imageRef.current.value;
        const hours = hoursRef.current.value;
        const minutes = minutesRef.current.value;

        addRecipe({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/recipes.json?auth=${token}`,
                method: 'POST',
                body: {
                    name, desc, preparation, img, ingredients: ingredients, hours, minutes, diff
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData
        );

    }

    //useEffect

    return (
        <section className={classes.card}>
            <h1>Here you can add new recipe</h1>
            <form className={classes.form}>
                <div>
                    <CustomInput label="Name" required type="text" maxLength='30' ref={nameRef}/>
                </div>
                <div>
                    <CustomInput label="Short description" required type="text" maxLength='50' ref={descRef}/>
                </div>
                <div className={classes['select__container']}>
                    <select className={classes.select} onChange={setDiffHandler}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <CustomInput label="Hours"  type="number" maxLength='3' min='0' max='12' ref={hoursRef}/>
                    <CustomInput label="Minutes"  type="number" maxLength='3' min='1'  max='59' ref={minutesRef}/>
                </div>
                <div>
                    <CustomInput label="Preparation" required type="text" maxLength='400' ref={prepRef}/>
                </div>
                <div>
                    <CustomInput label="Image (link)" type="text" ref={imageRef}/>
                </div>
                <CustomButton onClick={addRecipeHandler}>Add recipe</CustomButton>
            </form>
            <div>
                <ul>
                    {ingredients && Object.keys(ingredients).map((key) => (
                        <li className={classes.list}>
                            {key} - {ingredients[key]}
                            <button onClick={deleteIngredientHandler.bind(null, key)} className={classes['deleteIngredient__button']}>Delete</button>
                        </li>
                    ))}
                </ul>
                <IngredientsForm setIngredients={setIngredients}/>
            </div>
        </section>
    )
}

export default NewRecipe;