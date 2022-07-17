import classes from './Profile.module.css';
import authContext from "../../store/auth-context";
import {useContext} from "react";

const Profile = () => {
    const auth = useContext(authContext);

    const token = auth.token;
    console.log("token" +   token);

    const sendHandler = async () => {
        const response = await fetch(`https://recipes-app-32684-default-rtdb.firebaseio.com/meals.json?auth=${token}`);

        if (!response.ok) {
            throw new Error('Cannot load content.');
        }
        const responseData = await response.json();
        console.log(responseData);

    }
    return (
        <button onClick={sendHandler}>sdfsd</button>
    )
}

export default Profile;

