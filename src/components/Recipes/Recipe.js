import classes from './Recipe.module.css';
import pic1 from '../../assets/pic1.jpg';
import ShortRecipeInfo from "./ShortRecipeInfo";
import IngredientsInfo from "./IngredientsInfo";

const Recipe = () => {
    return (
        <section className={classes.card}>
            <img className={classes.img} src={pic1} alt='pic1'/>
            <div className={classes.main}>
                <header className={classes.header}>
                    <h2>Header 1</h2>
                    <h4>Header 2</h4>
                </header>
                <ShortRecipeInfo/>
                <IngredientsInfo/>
            </div>
            <div className={classes.preparation}>
                <h1>Preparation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
}

export default Recipe;