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
            <div className={classes.content}>Recipe Details</div>
        </section>
    )
}

export default Recipe;