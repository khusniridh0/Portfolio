'use client'

import { Close, Menu } from "@/components/icons";
import { AllContext } from "@/contexts/public-context";
import type { NavItem } from '@/types';
import { scrolled } from "@/utils/event";
import Link from "next/link";
import { memo, useContext } from "react";

export const MenuComponent = memo(({ items }: { items: NavItem[] }) => {
    const { menu, setMenu } = useContext(AllContext)!;
    return (
        <nav className={`${menu && 'show'}`}>
            {items?.map((item: NavItem, index: number) =>
                <Link onClick={scrolled} href={'/' + item?.link} className={`item-link w-full py-3 lg:p-0 text-center font-semibold ${index === 0 && 'active'}`} key={index} draggable={false}>
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

export const ToggleMenu = memo(() => {
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