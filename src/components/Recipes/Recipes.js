import Recipe from "./Recipe";
import classes from './Recipes.module.css';

const Recipes = () => {
return (
    <section>
        <header className={classes.header}>
            <h1>My recipes</h1>
        </header>
        <Recipe/>

    </section>
)
}

export default Recipes;