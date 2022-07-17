import classes from './AuthWindow.module.css';
import CustomButton from "../../UI/CustomButton";
import {useContext, useRef, useState} from "react";
import CustomInput from "../../UI/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner";
import AuthContext from "../../store/auth-context";

//todo
//custom hook
//context
// validation

const AuthWindow = () => {
    const authContext = useContext(AuthContext);

    const [isLoginWindow, setIsLoginWindow] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const switchAuthHandler = () => {
        setIsLoginWindow(prevState => !prevState);
    };

    const submitHandler = (e) => {
        setError(null);
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let url;

        if (isLoginWindow) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu_FKQ3ifslEkyl7g-RX6AFxUvljXVg_k';
        }
        setIsLoading(true);
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email, password, returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            setIsLoading(false);
            if (response.ok) {
                return response.json();

            } else {
                return response.json().then(data => {
                    if (data.error.message) {
                        throw new Error(data.error.message)
                    } else {
                        throw new Error('Unexpected error.')
                    }
                });
            }
        }).then((data) => {
            authContext.login(data.idToken);
            console.log(data.idToken);
            console.log(data)
        })
            .catch(error => setError(error.message));
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
                    {error && <p className={classes.error}>Cannot continue. <br/> {error}</p>}
                </div>
            </form>
        </section>
    )
}

export default AuthWindow;