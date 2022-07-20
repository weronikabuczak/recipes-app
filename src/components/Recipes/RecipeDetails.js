import classes from "./Recipe.module.css";
import ShortRecipeInfo from "./ShortRecipeInfo";
import IngredientsInfo from "./IngredientsInfo";

const RecipeDetails = ({recipe}) => {
    const {ingredients} = recipe;

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
            </div>
            <div className={classes.preparation}>
                <h1>Preparation</h1>
                <p>{recipe.preparation}</p>
            </div>
        </section>
    )
}

export default RecipeDetails;