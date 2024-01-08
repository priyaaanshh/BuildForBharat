import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    token: null,
    loading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                token: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                token: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                token: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                token: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                loading: state.loading,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}