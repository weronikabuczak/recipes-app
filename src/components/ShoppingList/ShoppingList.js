import classes from './ShoppingList.module.css';
import CustomButton from "../../UI/CustomButton";
import {useState} from "react";
import NewProductForm from "./NewProductForm";
import useHttp from "../../hooks/use-http";
import {useContext, useEffect} from "react";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Error from "../../UI/Error";

const ShoppingList = () => {
    const [showNewProductForm, setShowNewProductForm] = useState(false);
    const {isLoading, errorMessage, sendRequest: getProducts} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const [products, setProducts] = useState([]);

    const showNewProductFormHandler = () => {
        setShowNewProductForm(prevState => !prevState);
    }

    const receiveData = (data) => {
        //redux?
        const loadedProducts = [];
        for (const key in data) {
            loadedProducts.push({
                id: key,
                name: data[key].name,
                amount: data[key].amount
            })
        }
        setProducts(loadedProducts);
    };

    useEffect(() => {
            getProducts({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/products.json?auth=${token}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData);
        },
        [getProducts, token])

    return (
        <section className={classes.card}>
            {isLoading && <LoadingSpinner/>}
            {errorMessage && <Error errorMessage={errorMessage}/>}
            <ul className={classes.list}>
                {products && products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <span>
                            <button className={classes['list__button']}/>
                        </span>
                        <span>{product.amount}</span>
                    </li>
                ))}
            </ul>
            {showNewProductForm && <NewProductForm/>}
            {!showNewProductForm && <CustomButton onClick={showNewProductFormHandler}>Add product</CustomButton>}
        </section>
    )
}
export default ShoppingList;