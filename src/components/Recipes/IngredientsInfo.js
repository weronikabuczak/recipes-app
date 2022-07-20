import classes from './IngredientsInfo.module.css';

const IngredientsInfo = ({ingredients}) => {
    return (
        <div className={classes.ingredients}>
            <header className={classes.header}>Ingredients</header>
            <ul className={classes.ingredients__list}>
                {ingredients && Object.keys(ingredients).map((key, item) => (
                    <li key={key}>{key} <span className={classes.quantity}>{ingredients[key]}</span></li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientsInfo;