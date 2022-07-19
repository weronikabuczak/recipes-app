import classes from './AuthWindow.module.css';
import CustomButton from "../../UI/CustomButton";
import {useContext, useRef, useState} from "react";
import CustomInput from "../../UI/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";
import useHttp from "../../hooks/use-http";

const AuthWindow = () => {
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

    const retrieveData = (data) => {
        authContext.login(data.idToken);
    }

    const checkPasswordIsValid = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if (passwordRegex.test(password)) {
            setPasswordIsValid(true);
            setMessage("");
        } else {
            setPasswordIsValid(false);
            setMessage("Password must be 8 characters long and must contain at least one letter, one number and one special character.")
            //todo red frame?
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!isLoginWindow) {
            checkPasswordIsValid(password);
        }
        if (passwordIsValid) {
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
                }, retrieveData
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
                <div>
                    <CustomButton confirmation>{isLoginWindow ? 'Login' : 'Create account'}</CustomButton>
                    <CustomButton type='button' onClick={switchAuthHandler}>
                        {isLoginWindow ? 'Create new account' : 'Login with existing account'}
                    </CustomButton>
                    {isLoading && <LoadingSpinner/>}
                    {errorMessage && <p className={classes.error}>Cannot continue. <br/> {errorMessage}</p>}
                    {message && <p className={classes.error}>{message}</p>}
                </div>
            </form>
        </section>
    )
}

export default AuthWindow;