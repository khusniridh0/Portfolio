import { createContext, useEffect, useReducer } from "react";

export const AllContext = createContext(undefined);

const initialState = {
    theme: 'dark',
    section: 'home',
    reread: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            };
        case 'SET_SECTION':
            return {
                ...state,
                section: action.payload
            };
        case 'SET_REREAD':
            return {
                ...state,
                reread: action.payload
            };
        default:
            return state;
    }
};

export const AllProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setTheme = (data) => {
        document.body.className = data;
        document.body.dataset.theme = data;
        localStorage.setItem('theme', data);
        dispatch({ type: 'SET_THEME', payload: data });
    };

    const setSection = (data) => {
        dispatch({ type: 'SET_SECTION', payload: data });
    };
    
    const setReread = (data) => {
        dispatch({ type: 'SET_REREAD', payload: data });
    };

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
    }, [])

    return (
        <AllContext.Provider value={{ reread: state.reread, theme: state.theme, section: state.section, setReread, setTheme, setSection }}>
            {children}
        </AllContext.Provider>
    );
};