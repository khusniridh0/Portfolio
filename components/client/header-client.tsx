'use client'

import React from "react";
import { Moon, Sun } from "@/components/icons";
import { AllContext } from "@/contexts/public-context";
import { useContext } from "react";

export const ChangeTheme = React.memo(() => {
    const { theme, setTheme } = useContext(AllContext)!;

    return (
        <>
            <span className="text-sm font-semibold capitalize">{theme}</span>
            <button className="border-primary p-2 lg:p-3 rounded-full" aria-label="change theme" onClick={() => { setTheme(theme == 'light' ? 'dark' : 'light') }}>
                {theme == 'dark' ? <Moon color="var(--text-content)" /> : <Sun color="var(--text-content)" />}
            </button>
        </>
    )
});

ChangeTheme.displayName = 'ChangeTheme';
