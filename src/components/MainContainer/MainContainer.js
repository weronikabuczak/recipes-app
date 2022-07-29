import {Fragment} from "react";
import classes from './MainContainer.module.css';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer/Footer";

const MainContainer = (props) => {
    return (
        <Fragment>
            <NavigationBar/>
            <div className={classes.main}>
                {props.children}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default MainContainer;