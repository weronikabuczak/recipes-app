import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const NavigationBarItems = (props) => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler = () => {
        authContext.logout();
    }

    const hideMenuHandler = () => {
        props.setShowMenu(false);
    }

    return (
        <nav>
            <ul>
                {isLoggedIn &&
                    <li onClick={hideMenuHandler}>
                        <Link to='/recipes'>Recipes</Link>
                    </li>}
                {isLoggedIn &&
                    <li onClick={hideMenuHandler}>
                        <Link to='/shopping'>Shopping</Link>
                    </li>}
                {isLoggedIn &&
                    <li onClick={hideMenuHandler}>
                        <Link to='/profile'>Profile</Link>
                    </li>}
                {isLoggedIn &&
                    <li onClick={logoutHandler} onClick={hideMenuHandler}>
                        Logout
                    </li>}
            </ul>
        </nav>
    )
}

export default NavigationBarItems;