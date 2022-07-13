import {Fragment} from "react";
import Header from "./Header/Header";
import classes from './MainContainer.module.css';
import NavigationBar from "./NavigationBar";

const MainContainer = () => {
    return (
        <Fragment>
            <div className={classes.main}>
                <NavigationBar/>
                <Header/>
            </div>
        </Fragment>
    )
}

export default MainContainer;