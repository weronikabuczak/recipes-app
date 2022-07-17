import React, {useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    token: '',
    login: (token) => {
    },
    logout: () => {
    }
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState();
    const userLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;