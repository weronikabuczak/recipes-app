import {Fragment} from "react";
import classes from './MainContainer.module.css';
import NavigationBar from "./NavigationBar";

const MainContainer = (props) => {
    return (
        <Fragment>
            <NavigationBar/>
            <div className={classes.main}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default MainContainer;