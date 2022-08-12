import CustomInput from "../../UI/CustomInput";
import CustomButton from "../../UI/CustomButton";
import useHttp from "../../hooks/use-http";
import {useRef, useState} from "react";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import Error from "../../UI/Error";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from './NewProductForm.module.css';

const NewProductForm = ({setShowNewProductForm}) => {
    const {isLoading, errorMessage, sendRequest: addProduct} = useHttp();
    const [unit, setUnit] = useState();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const localId = authContext.localId;
    const nameRef = useRef();
    const amountRef = useRef();

    const setUnitHandler = (e) => {
        setUnit(e.target.value);
    }

    const closeFormHandler = () => {
        setShowNewProductForm(false);
    }

    const receiveData = () => {
        setShowNewProductForm(prevState => !prevState);
    }

    const AddProductHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const amount = +amountRef.current.value;
        addProduct({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/${localId}/products.json?auth=${token}`,
                method: 'POST',
                body: {
                    name, amount, unit
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData
        );
    }

    return (
        <form onSubmit={AddProductHandler}>
            <div className={classes['products__inputs']}>
                <CustomInput type='text' required label='Name of product' ref={nameRef}/>
                <CustomInput type='number' required label='Amount' ref={amountRef}/>
                <div className={classes['select__container']}>
                    <select className={classes.select} onChange={setUnitHandler}>
                        <option value="">No unit</option>
                        <option value="g">Gram</option>
                        <option value="ml">Millilitre</option>
                        <option value="tsp">Teaspoon</option>
                        <option value="tsp">Tablespoon</option>
                    </select>
                </div>
            </div>
            <div className={classes['products__actions']}>
                <CustomButton confirmation type='submit'>Submit</CustomButton>
                <CustomButton type='button' onClick={closeFormHandler} cancellation>Cancel</CustomButton>
            </div>
            {isLoading && <LoadingSpinner/>}
            {errorMessage && <Error errorMessage={errorMessage}/>}
        </form>
    )
}

export default NewProductForm;