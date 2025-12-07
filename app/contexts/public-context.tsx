'use client'

import { createContext, ReactNode, useEffect, useReducer } from "react";

type State = {
    theme: string;
    section: string;
    reread: object | null;
    menu: boolean;
};

type Action =
    | { type: 'SET_THEME'; payload: string }
    | { type: 'SET_SECTION'; payload: string }
    | { type: 'SET_REREAD'; payload: object | null }
    | { type: 'SET_MENU'; payload: boolean };

export const AllContext = createContext<{
    theme: string;
    section: string;
    reread: object | null;
    menu: boolean;
    setTheme: (data: string) => void;
    setSection: (data: string) => void;
    setReread: (data: object) => void;
    setMenu: (data: boolean) => void;
} | undefined>(undefined);

const initialState: State = {
    theme: 'light',
    section: 'home',
    reread: null,
    menu: false,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        case 'SET_SECTION':
            return {
                ...state,
                section: action.payload,
            };
        case 'SET_REREAD':
            return {
                ...state,
                reread: action.payload,
            };
        case 'SET_MENU':
            return {
                ...state,
                menu: action.payload,
            };
        default:
            return state;
    }
};

export const AllProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setTheme = (data: string) => {
        document.body.className = data;
        localStorage.setItem('theme', data);
        dispatch({ type: 'SET_THEME', payload: data });
    };

    const setSection = (data: string) => {
        dispatch({ type: 'SET_SECTION', payload: data });
    };

    const setReread = (data: object) => {
        dispatch({ type: 'SET_REREAD', payload: data });
    };
    
    const setMenu = (data: boolean) => {
        dispatch({ type: 'SET_MENU', payload: data });
    };

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light');
    }, []);

    return (
        <AllContext.Provider value={{ theme: state.theme, section: state.section, reread: state.reread, menu: state.menu, setTheme, setSection, setReread, setMenu }}>
            {children}
        </AllContext.Provider>
    );
};
