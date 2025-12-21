export type State = {
    theme: string;
    section: string;
    reread: object | null;
    menu: boolean;
};

export type Action =
    | { type: 'SET_THEME'; payload: string }
    | { type: 'SET_SECTION'; payload: string }
    | { type: 'SET_REREAD'; payload: object | null }
    | { type: 'SET_MENU'; payload: boolean };
