'use client'

import { AllContext } from "@/app/contexts/public-context";
import { Close, Menu, Moon, Sun } from "@/app/components/icons";
import { useContext } from "react";
import { scrolled } from "../utils/event";
import Link from "next/link";

interface NavItem {
    link: string;
    text: string;
}

export const MenuComponent = ({ items }: { items: NavItem[] }) => {
    const { menu, setMenu } = useContext(AllContext)!;
    return (
        <nav className={`${menu && 'show'}`}>
            {items?.map((item: NavItem, index: number) =>
                <Link onClick={scrolled} href={item?.link} className={`item-link w-full py-3 lg:p-0 text-center font-semibold ${index === 0 && 'active'}`} key={index} rel="preload">
                    <span>{item?.text}</span>
                </Link>
            )}

            <button className="absolute top-5 right-5 lg:hidden" aria-label="close menu" onClick={() => { setMenu(false) }}>
                <Close color="var(--text-content)" />
            </button>
        </nav>
    )

}

export const ToggleMenu = () => {
    const { menu, setMenu } = useContext(AllContext)!;
    return (
        <button className={`fixed -right-6 top-0 bottom-0 lg:hidden z-[40] ${menu ? 'fadeOutRight' : 'fadeInRight'}`} aria-label="toggle menu" onClick={() => { setMenu(true) }}>
            <div className="bg-[var(--tertiary)] p-2 rounded-1 show-nav">
                <Menu color="var(--text-content)" size={26} />
            </div>
        </button>
    )
}

export const ChangeTheme = () => {
    const { theme, setTheme } = useContext(AllContext)!;
    
    return (
        <>
            <span className="text-sm font-semibold capitalize">{theme}</span>
            <button className="border-primary p-2 lg:p-3 rounded-full" aria-label="change theme" onClick={() => { setTheme(theme == 'light' ? 'dark' : 'light') }}>
                {theme == 'dark' ? <Sun color="var(--text-content)" /> : <Moon color="var(--text-content)" />}
            </button>
        </>
    )
}