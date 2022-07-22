import classes from './IngredientsInfo.module.css';
import CustomButton from "../../../../UI/CustomButton";
import {useState} from "react";
import IngredientsForm from "./IngredientsForm";

const IngredientsInfo = ({ingredients}) => {
    const [showIngredientsForm, setShowIngredientsForm] = useState(false);

    const showIngredientsFormHandler = () => {
        setShowIngredientsForm(prevState => !prevState);
    }

    return (
        <div className={classes.ingredients}>
            <header className={classes.header}>Ingredients</header>
            <CustomButton confirmation onClick={showIngredientsFormHandler}>Create shopping list</CustomButton>
            <ul className={classes.ingredients__list}>
                {ingredients && Object.keys(ingredients).map((key, item) => (
                    <li key={key}>
                            {key}
                            <span className={classes.quantity}>
                            {ingredients[key]}
                        </span>
                        </li>
                ))}
            </ul>
            {showIngredientsForm && <IngredientsForm setShowIngredientsForm={setShowIngredientsForm}/>}
        </div>
    )
}

export default IngredientsInfo;