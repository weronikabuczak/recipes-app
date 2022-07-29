import React, {useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    token: '',
    localId: '',
    login: (token, localId) => {
    },
    logout: () => {
    }
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState();
    const [localId, setLocalId] = useState();
    const userLoggedIn = !!token;

    const loginHandler = (token, localId) => {
        setToken(token);
        setLocalId(localId);
    }

    const logoutHandler = () => {
        setToken(null);
        setLocalId(null);
    }

    const contextValue = {
        token: token,
        localId: localId,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;