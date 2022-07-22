import CustomInput from "../../UI/CustomInput";
import CustomButton from "../../UI/CustomButton";
import useHttp from "../../hooks/use-http";
import {useRef} from "react";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import Error from "../../UI/Error";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from './NewProductForm.module.css';

const NewProductForm = ({setShowNewProductForm}) => {
    const {isLoading, errorMessage, sendRequest: addProduct} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const nameRef = useRef();
    const amountRef = useRef();

    const closeFormHandler = () => {
        setShowNewProductForm(false);
    }

    const receiveData = (data) => {
        setShowNewProductForm(prevState => !prevState);
    }

    const AddProductHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const amount = amountRef.current.value;
        const product = {name, amount}
        addProduct({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/products.json?auth=${token}`,
                method: 'POST',
                body: {
                    name, amount, returnSecureToken: true
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData
        );
    }

    return (
        <form onSubmit={AddProductHandler}>
            <CustomInput type='text' required label='Name of product' ref={nameRef}/>
            <CustomInput type='text' label='Amount' ref={amountRef}/>
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