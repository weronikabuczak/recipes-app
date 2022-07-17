import {Link} from "react-router-dom";
import classes from './NagivationBar.module.css';
import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import CustomButton from "../../UI/CustomButton";

const NavigationBar = () => {
    const authContext = useContext(AuthContext);

    const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler = () => {
        authContext.logout();
        console.log('logged out')
    }

    return (
        <header className={classes.header}>
            <Link to='/home'>
                <div className={classes.title}>Recipes App</div>
            </Link>
            <nav>
                <ul>
                    {isLoggedIn &&
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>}
                    {isLoggedIn &&
                        <li>
                            <Link to='/recipes'>Recipes</Link>
                        </li>}
                    {isLoggedIn &&
                        <li>
                            <Link to='/shopping'>Shopping</Link>
                        </li>}
                    {!isLoggedIn &&
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>}
                    {isLoggedIn &&
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>}
                    {isLoggedIn &&
                        <li onClick={logoutHandler}>
                            Logout
                        </li>}
                </ul>
            </nav>
        </header>
    )
};

export default NavigationBar;