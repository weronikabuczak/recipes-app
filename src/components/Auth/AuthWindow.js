import classes from './AuthWindow.module.css';
import CustomButton from "../../UI/CustomButton";
import {useContext, useRef, useState} from "react";
import CustomInput from "../../UI/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";
import useHttp from "../../hooks/use-http";
import {useHistory} from "react-router-dom";
import Error from "../../UI/Error";

const AuthWindow = () => {
    const history = useHistory();
    const authContext = useContext(AuthContext);
    const [isLoginWindow, setIsLoginWindow] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const {isLoading, errorMessage, sendRequest: authUser} = useHttp();
    const [passwordIsValid, setPasswordIsValid] = useState(null);
    const [message, setMessage] = useState("");

    const switchAuthHandler = () => {
        setIsLoginWindow(prevState => !prevState);
    };

    const receiveData = (data) => {
        authContext.login(data.idToken, data.localId);
        history.replace('/recipes');
    }

    const checkPasswordIsValid = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if (passwordRegex.test(password)) {
            setPasswordIsValid(true);
            setMessage("");
        } else {
            setPasswordIsValid(false);
            setMessage("Password must be 8 characters long and must contain at least one letter, one number and one special character.")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!isLoginWindow) {
            checkPasswordIsValid(password);
        }
        if (isLoginWindow || (!isLoginWindow && passwordIsValid)) {
            authUser({
                    url: isLoginWindow ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k'
                        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k',
                    method: 'POST',
                    body: {
                        email, password, returnSecureToken: true
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, receiveData
            );
        }
    }

    return (
        <section className={classes.auth}>
            <header>
                <h1>{isLoginWindow ? 'Login' : 'Sign Up'}</h1>
            </header>
            <form onSubmit={submitHandler}>
                <CustomInput type='email' id='email' required label='Email' ref={emailRef}/>
                <CustomInput type='password' id='password' required label='Password'
                             ref={passwordRef}/>
                <div className={classes.actions}>
                    <CustomButton confirmation>{isLoginWindow ? 'Login' : 'Create account'}</CustomButton>
                    <CustomButton type='button' onClick={switchAuthHandler}>
                        {isLoginWindow ? 'Create new account' : 'Login with existing account'}
                    </CustomButton>
                    {isLoading && <LoadingSpinner/>}
                    {errorMessage && <Error errorMessage={errorMessage}/>}
                    {message && <Error errorMessage={message}/>}
                </div>
            </form>
        </section>
    )
}

export default AuthWindow;