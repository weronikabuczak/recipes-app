import classes from './ShoppingList.module.css';
import CustomButton from "../../UI/CustomButton";
import {useState} from "react";
import NewProductForm from "./NewProductForm";
import useHttp from "../../hooks/use-http";
import {useContext, useEffect} from "react";
import AuthContext from "../../store/auth-context";
import Error from "../../UI/Error";
import LoadingSpinner from "../../UI/LoadingSpinner";

const ShoppingList = () => {

    const [showNewProductForm, setShowNewProductForm] = useState(false);
    const {isLoading, errorMessage, sendRequest: getProducts} = useHttp();
    const {sendRequest: deleteProduct} = useHttp();
    const authContext = useContext(AuthContext);
    const token = authContext.token;
    const [products, setProducts] = useState([]);
    const [productsNoDup, setProductsNoDup] = useState([]);
    const [refreshAfterDelete, setRefreshAfterDelete] = useState(false);

    const showNewProductFormHandler = () => {
        setShowNewProductForm(prevState => !prevState);
    }

    const deleteProductHandler = (name) => {
        console.log(productsNoDup);
        const findName = productsNoDup.filter((product => product.name === name));
        console.log(findName);
        for(const item of findName) {
            deleteProduct({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/products/${item.id}.json?auth=${token}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        setRefreshAfterDelete(true);
    }

    const receiveData = (data) => {
        //redux?
        setRefreshAfterDelete(false);
        const loadedProducts = [];
        for (const key in data) {
            loadedProducts.push({
                id: key,
                name: data[key].name,
                amount: data[key].amount
            })
        }
        setProductsNoDup(loadedProducts);
        const products = Object.values(data);
        const deduplicatedProducts = [];

        products.forEach(item => {
            const duplicatedProduct = deduplicatedProducts.find(addedItem => addedItem.name === item.name);
            if (duplicatedProduct) {
                duplicatedProduct.amount += +item.amount;
            } else {
                deduplicatedProducts.push({
                    ...item
                })
            }
        })
        setProducts(deduplicatedProducts);
    };

    useEffect(() => {
            getProducts({
                url: `https://recipes-app-32684-default-rtdb.firebaseio.com/products.json?auth=${token}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, receiveData);
        },
        [getProducts, token, showNewProductForm, refreshAfterDelete]);


    return (
        <section className={classes.card}>
            {isLoading && <LoadingSpinner/>}
            {errorMessage && <Error errorMessage={errorMessage}/>}
            <ul className={classes.list}>
                {products && products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <span>
                            <button onClick={deleteProductHandler.bind(null, product.name)}
                                    className={classes['list__button']}/>
                        </span>
                        <span>{product.amount}</span>
                        <span>{product.unit}</span>
                    </li>
                ))}
            </ul>
            {showNewProductForm && <NewProductForm setShowNewProductForm={setShowNewProductForm}/>}
            {!showNewProductForm && <CustomButton onClick={showNewProductFormHandler}>Add product</CustomButton>}
        </section>
    )
}
export default ShoppingList;