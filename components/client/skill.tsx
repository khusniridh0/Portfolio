'use client'

import { useState, useCallback } from "react";
import type { Tab } from '@/types';

export const ActiveTap = ({ tabs }: { tabs: Tab[] }) => {
    const [active, setActive] = useState(tabs[0].key)
    const handleActive = useCallback((key: string) => setActive(key), [])

    return (
        <>
            <div className="flex-center-center gap-x-6 lg:gap-x-14 border-primary rounded-full w-fit my-8 p-5 lg:p-[30px] mx-auto">
                {tabs.map(({ title, key }, i) => (
                    <button className={`item-link text-[12px] lg:text-sm uppercase font-semibold ${active === key && 'active'}`} onClick={() => handleActive(key)} key={i}>
                        <span>{title}</span>
                    </button>
                ))}
            </div>
            {tabs.find(tab => tab.key === active)?.component || null}
        </>
    );
}
