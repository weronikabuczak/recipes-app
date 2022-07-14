import {Link} from "react-router-dom";
import classes from './NagivationBar.module.css';

const NavigationBar = () => {
    return (
        <header className={classes.header}>
            <Link to='/home'>
                <div className={classes.title}>Title</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/recipes'>Recipes</Link>
                    </li>
                    <li>
                        <Link to='/shopping'>Shopping</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavigationBar;