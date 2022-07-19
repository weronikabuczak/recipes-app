import Recipe from "./Recipe";
import classes from './Recipes.module.css';
import useHttp from "../../hooks/use-http";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Error from "../../UI/Error";

const Recipes = () => {
    const {isLoading, errorMessage, sendRequest: getRecipes} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const [recipes, setRecipes] = useState([]);

    const receiveData = (data) => {
        //redux?
        const loadedRecipes = [];
        for (const key in data) {
            loadedRecipes.push({
                id: key,
                name: data[key].name,
                desc: data[key].desc,
                img: data[key].img,
                diff: data[key].diff,
                hours: data[key].hours,
                minutes: data[key].minutes,
                preparation: data[key].preparation,
                ingredients: data[key].ingredients
            })
        }
        setRecipes(loadedRecipes);
    };
    console.log(recipes);

    useEffect(() => {
            getRecipes({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.cm/recipes.json?auth=${token}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData);
        },
        [])

    return (
        <section>
            <header className={classes.header}>
                <h1>My recipes</h1>
                {isLoading && <LoadingSpinner/>}
                {errorMessage && <Error errorMessage={errorMessage}/>}
            </header>
            <Recipe/>
        </section>
    )
}

export default Recipes;