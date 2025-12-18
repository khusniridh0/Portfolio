'use client'

import { createContext, ReactNode, useEffect, useReducer, useMemo, useCallback } from "react";

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

    const setTheme = useCallback((data: string) => {
        const applyTheme = () => {
            document.body.className = data;
            localStorage.setItem('theme', data);
            dispatch({ type: 'SET_THEME', payload: data });
        };
        if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
            window.requestAnimationFrame(applyTheme);
        } else {
            applyTheme();
        }
    }, []);

    const setSection = useCallback((data: string) => {
        dispatch({ type: 'SET_SECTION', payload: data });
    }, []);

    const setReread = useCallback((data: object) => {
        dispatch({ type: 'SET_REREAD', payload: data });
    }, []);
    
    const setMenu = useCallback((data: boolean) => {
        dispatch({ type: 'SET_MENU', payload: data });
    }, []);

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light');
    }, [setTheme]);

    const contextValue = useMemo(() => ({
        theme: state.theme,
        section: state.section,
        reread: state.reread,
        menu: state.menu,
        setTheme,
        setSection,
        setReread,
        setMenu
    }), [state.theme, state.section, state.reread, state.menu, setTheme, setSection, setReread, setMenu]);

    return (
        <AllContext.Provider value={contextValue}>
            {children}
        </AllContext.Provider>
    );
};
