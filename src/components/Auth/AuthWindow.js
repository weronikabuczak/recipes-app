import classes from './AuthWindow.module.css';
import CustomButton from "../../UI/CustomButton";
import {useContext, useRef, useState} from "react";
import CustomInput from "../../UI/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";
import useHttp from "../../hooks/use-http";

//todo
// validation

const AuthWindow = () => {
    const authContext = useContext(AuthContext);
    const [isLoginWindow, setIsLoginWindow] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();

    const switchAuthHandler = () => {
        setIsLoginWindow(prevState => !prevState);
    };

    const {isLoading, errorMessage, sendRequest: authUser} = useHttp();

    // const {isLoading, errorMessage, sendRequest: authUser} = useHttp({
    //     url: isLoginWindow ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k'
    //         : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k',
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email, password, returnSecureToken: true
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    const retrieveData = (data) => {
        console.log(data);
        authContext.login(data.idToken);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
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


    return (
        <section className={classes.auth}>
            <header>
                <h1>{isLoginWindow ? 'Login' : 'Sign Up'}</h1>
            </header>
            <form onSubmit={submitHandler}>
                <CustomInput className={classes.control} type='email' id='email' required label='Email' ref={emailRef}/>
                <CustomInput className={classes.control} type='password' id='password' required label='Password'
                             ref={passwordRef}/>
                <div className={classes.actions}>
                    <CustomButton confirmation>{isLoginWindow ? 'Login' : 'Create account'}</CustomButton>
                    <CustomButton
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthHandler}
                    >
                        {isLoginWindow ? 'Create new account' : 'Login with existing account'}
                    </CustomButton>
                    {isLoading && <LoadingSpinner/>}
                    {errorMessage && <p className={classes.error}>Cannot continue. <br/> {errorMessage}</p>}
                </div>
            </form>
        </section>
    )
}

export default AuthWindow;