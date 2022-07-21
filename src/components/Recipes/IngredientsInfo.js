import classes from './IngredientsInfo.module.css';

const IngredientsInfo = ({ingredients, short}) => {
    return (
        <div className={classes.ingredients}>
            <header className={classes.header}>Ingredients</header>
            <ul className={classes.ingredients__list}>
                {ingredients && Object.keys(ingredients).map((key, item) => (
                    short ?
                        item < 3 &&
                        <li key={key}>
                            {key}
                            <span className={classes.quantity}>
                            {ingredients[key]}
                        </span>
                        </li>
                        : <li key={key}>
                            {key}
                            <span className={classes.quantity}>
                            {ingredients[key]}
                        </span>
                        </li>
                ))}
            </ul>
            {short && <div className={classes.moreInfo}>Click <strong>Show more</strong> to see all ingredients and preparation.</div>}
        </div>
    )
}

export default IngredientsInfo;