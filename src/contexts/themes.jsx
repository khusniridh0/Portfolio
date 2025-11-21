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

    const setTheme = (theme) => {
        document.body.className = theme;
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        dispatch({ type: 'SET_THEME', payload: theme });
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme);
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme: state.theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};