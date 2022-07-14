import classes from './AuthWindow.module.css';
import CustomButton from "../../UI/CustomButton";
import {useState} from "react";
import CustomInput from "../../UI/CustomInput";

const AuthWindow = () => {
    const [isLoginWindow, setIsLoginWindow] = useState();

    return (
        <section className={classes.auth}>
            <h1>{isLoginWindow ? 'Login' : 'Sign Up'}</h1>
            <form>
                <CustomInput className={classes.control} type='email' id='email' required label='Email'/>
                <CustomInput className={classes.control} type='password' id='password' required label='Password'/>
                <div className={classes.actions}>
                    <CustomButton confirmation>{isLoginWindow ? 'Login' : 'Create Account'}</CustomButton>
                    <CustomButton
                        type='button'
                        className={classes.toggle}
                        // onClick={switchAuthModeHandler}
                    >
                        {isLoginWindow ? 'Create new account' : 'Login with existing account'}
                    </CustomButton>
                </div>
            </form>
        </section>
    )
}

export default AuthWindow;