'use client'

import React from "react";
import { Close, Menu, Moon, Sun } from "@/app/components/icons";
import { AllContext } from "@/app/contexts/public-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { scrolled } from "@/app/utils/event";

interface NavItem {
    link: string;
    text: string;
}

const navItem = [
    { link: '#hero', text: 'Home' },
    { link: '#about', text: 'About' },
    { link: '#skill', text: 'Skill' },
    { link: '#works', text: 'Project' },
    { link: '#cta', text: 'Contact' }
]

export const HeaderI = () => {
    return (
        <header id="main-nav" className="flex justify-between items-center sticky top-5">
            <Link href='/'>
                <Image src="/logo/logo-91x80.webp" width={76} height={76} alt="Khusni Ridho" className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" loading="eager" />
            </Link>
            <MenuComponent items={navItem} />
            <ToggleMenu />

            <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                <ChangeTheme />
            </div>
        </header>
    )
}

export const HeaderII = () => {
    return (
        <header id="main-nav" className="flex justify-between items-center sticky top-5">
            <Link href='/'>
                <Image src="/logo/logo-91x80.webp" width={76} height={76} alt="Khusni Ridho" className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" loading="eager" />
            </Link>

            <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                <ChangeTheme />
            </div>
        </header>
    )
}

export const MenuComponent = React.memo(({ items }: { items: NavItem[] }) => {
    const { menu, setMenu } = useContext(AllContext)!;
    return (
        <nav className={`${menu && 'show'}`}>
            {items?.map((item: NavItem, index: number) =>
                <Link onClick={scrolled} href={'/' + item?.link} className={`item-link w-full py-3 lg:p-0 text-center font-semibold ${index === 0 && 'active'}`} key={index}>
                    <span>{item?.text}</span>
                </Link>
            )}

            <button className="absolute top-5 right-5 lg:hidden" aria-label="close menu" onClick={() => { setMenu(false) }}>
                <Close color="var(--text-content)" />
            </button>
        </nav>
    )

});

MenuComponent.displayName = 'MenuComponent';

export const ToggleMenu = React.memo(() => {
    const { menu, setMenu } = useContext(AllContext)!;
    return (
        <button className={`fixed -right-6 top-0 bottom-0 lg:hidden z-[40] ${menu ? 'fadeOutRight' : 'fadeInRight'}`} aria-label="toggle menu" onClick={() => { setMenu(true) }}>
            <div className="bg-[var(--tertiary)] p-2 rounded-1 show-nav">
                <Menu color="var(--text-content)" size={26} />
            </div>
        </button>
    )
});

ToggleMenu.displayName = 'ToggleMenu';

export const ChangeTheme = React.memo(() => {
    const { theme, setTheme } = useContext(AllContext)!;

    return (
        <>
            <span className="text-sm font-semibold capitalize">{theme}</span>
            <button className="border-primary p-2 lg:p-3 rounded-full" aria-label="change theme" onClick={() => { setTheme(theme == 'light' ? 'dark' : 'light') }}>
                {theme == 'dark' ? <Sun color="var(--text-content)" /> : <Moon color="var(--text-content)" />}
            </button>
        </>
    )
});

ChangeTheme.displayName = 'ChangeTheme';