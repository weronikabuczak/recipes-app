import classes from "./RecipeDetails.module.css";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../store/auth-context";
import ShortRecipeInfo from "../Common/ShortRecipeInfo";
import IngredientsInfo from "./Ingredients/IngredientsInfo";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Error from "../../../UI/Error";

const RecipeDetails = () => {
    const {isLoading, errorMessage, sendRequest: getRecipe} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const [recipe, setRecipe] = useState({});
    let {id} = useParams();

    const receiveData = (data) => {
        setRecipe(data);
    }

    useEffect(() => {
        getRecipe({
            url: `https://recipes-app-32684-default-rtdb.firebaseio.com/recipes/${id}.json?auth=${token}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }, receiveData)
    }, [getRecipe, id, token]);

    const {ingredients} = recipe;
    return (
        <>
            <div>
                {isLoading && <LoadingSpinner/>}
                {errorMessage && <Error errorMessage={errorMessage}/>}
            </div>
            <section className={classes.card}>
                <img className={classes.img} src={recipe.img} alt='pic1'/>
                    <header className={classes.header}>
                        <h2>{recipe.name}</h2>
                        <h4>{recipe.desc}</h4>
                        <ShortRecipeInfo recipe={recipe}/>
                    </header>
                <div className={classes.main}>
                    <IngredientsInfo key={recipe.id} ingredients={ingredients}/>
                </div>
                <div className={classes.preparation}>
                    <h1>Preparation</h1>
                    <p>{recipe.preparation}</p>
                </div>
            </section>
        </>
    )
}

export default RecipeDetails;