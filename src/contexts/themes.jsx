import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext(undefined);

const initialState = {
    theme: 'dark'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setTheme = (data) => {
        document.body.className = data;
        document.body.dataset.theme = data;
        localStorage.setItem('theme', data);
        dispatch({ type: 'SET_THEME', payload: data });
    };

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
    }, [])

    return (
        <ThemeContext.Provider value={{ theme: state.theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};