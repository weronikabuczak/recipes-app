import {Link} from "react-router-dom";
import classes from './NagivationBar.module.css';
import {useState} from "react";
import CustomButton from "../../UI/CustomButton";
import MobileMenu from "./MobileMenu";
import NavigationBarItems from "./NavigationBarItems";

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuHandler = () => {
        setShowMenu(prevState => !prevState);
    }

    return (
        <>
            <header className={classes.header}>
                <Link to='/recipes'>
                    <div className={classes.title}>Recipes App</div>
                </Link>
                <NavigationBarItems setShowMenu={setShowMenu}/>
                <CustomButton onClick={toggleMenuHandler} className={classes['menu__button']}>Menu</CustomButton>
            </header>
            {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>}
        </>
    )
};

export default NavigationBar;