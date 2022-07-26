import classes from './MobileMenu.module.css';
import NavigationBarItems from "./NavigationBarItems";

const MobileMenu = (props) => {
    return (
        <div className={classes['menu__container']}>
                <NavigationBarItems setShowMenu={props.setShowMenu}/>
        </div>
    )
}

export default MobileMenu;