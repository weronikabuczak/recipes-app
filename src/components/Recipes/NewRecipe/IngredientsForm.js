import classes from "../../ShoppingList/NewProductForm.module.css";
import CustomInput from "../../../UI/CustomInput";
import {useRef, useState} from "react";
import CustomButton from "../../../UI/CustomButton";

const IngredientsForm = (props) => {

    const nameRef =  useRef();
    const amountRef = useRef();

    const addIngredientHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const amount = amountRef.current.value;

        props.setIngredients(ingredients => ({
            ...ingredients,
            [name]: amount
        }));

    }

    return (
        <form onSubmit={addIngredientHandler}>
            <div className={classes['products__inputs']}>
                <CustomInput type='text' required label='Name of the product' ref={nameRef}/>
                <CustomInput type='text' required label='Amount' ref={amountRef}/>
            </div>
            <CustomButton type='submit'>Submit</CustomButton>
        </form>
    )
}

export default IngredientsForm;
