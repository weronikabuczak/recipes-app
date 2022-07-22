import classes from './Recipe.module.css';
import ShortRecipeInfo from "../Common/ShortRecipeInfo";
import CustomButton from "../../../UI/CustomButton";
import {useHistory} from "react-router-dom";
import IngredientsInfo from "./IngredientsInfo";

const Recipe = ({recipe}) => {
    const {ingredients} = recipe;
    const history = useHistory();

    const showRecipeDetailsHandler = () => {
        history.push({
            pathname: `/recipes/${recipe.id}`
        });
    }

    return (
        <section className={classes.card}>
            <img className={classes.img} src={recipe.img} alt='pic1'/>
            <div className={classes.main}>
                <header className={classes.header}>
                    <h2>{recipe.name}</h2>
                    <h4>{recipe.desc}</h4>
                </header>
                <ShortRecipeInfo recipe={recipe}/>
                <IngredientsInfo ingredients={ingredients}/>
                <CustomButton onClick={showRecipeDetailsHandler}>Show more</CustomButton>
            </div>
        </section>
    )
}

export default Recipe;