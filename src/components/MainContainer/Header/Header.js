import {Fragment} from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>Recipes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/*    todo carousel ?*/}
            </header>
        </Fragment>
    )
};

export default Header;