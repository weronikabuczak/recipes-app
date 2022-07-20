import classes from './ShoppingList.module.css';
import CustomButton from "../../UI/CustomButton";
import {useState} from "react";
import NewProductForm from "./NewProductForm";

const ShoppingList = () => {
    const [showNewProductForm, setShowNewProductForm] = useState(false);

    const showNewProductFormHandler = () => {
        setShowNewProductForm(prevState => !prevState);
    }

    return (
        <section className={classes.card}>
            <ul className={classes.list}>
                <li>First item
                    <span>
                        <button className={classes['list__button']}/>
                    </span>
                    <span>500 g</span>
                </li>
                <li>Second item</li>
            </ul>
            {showNewProductForm && <NewProductForm/>}
            {!showNewProductForm &&<CustomButton onClick={showNewProductFormHandler}>Add product</CustomButton>}
        </section>
    )
}
export default ShoppingList;