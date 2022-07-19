import classes from './IngredientsInfo.module.css';

const IngredientsInfo = () => {
    return (
        <section className={classes.ingredients}>
            <header className={classes.header}>Ingredients</header>
            <ul className={classes.ingredients__list}>
                <li>Flour <span className={classes.quantity}>500g</span></li>
                <li>Ing 2</li>
                <li>Ing 3</li>
                <li>Ing 4</li>
            </ul>
        </section>
    )
}

export default IngredientsInfo;