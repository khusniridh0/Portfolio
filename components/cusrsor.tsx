'use client'

import { useEffect, useMemo, useState } from "react";
import { throttle } from "@/utils/func";

const Cursor = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateState = () => {
            const isDesktop = window.innerWidth >= 1024;
            setIsEnabled(isDesktop && !mediaQuery.matches);
        };

        updateState();
        mediaQuery.addEventListener('change', updateState);
        window.addEventListener('resize', updateState);

        return () => {
            mediaQuery.removeEventListener('change', updateState);
            window.removeEventListener('resize', updateState);
        };
    }, []);

    const throttledCursorTrack = useMemo(
        () => throttle((e: MouseEvent) => {
            const cursor = document.querySelector<HTMLSpanElement>('.cursor');
            cursor?.setAttribute('style', `top:${e.pageY - 2}px;left:${e.pageX - 2}px;`);
        }, 16),
        []
    );

    useEffect(() => {
        if (!isEnabled) return;

        const body = document.body;
        const handleClick = (e: MouseEvent) => {
            const template = document.querySelector<HTMLDivElement>('.cursor-clicked');
            const clickIndicator = template?.cloneNode(true) as HTMLElement | null;
            if (!clickIndicator) return;
            clickIndicator.classList.add('clicked');
            clickIndicator.style.top = `${e.pageY - 2}px`;
            clickIndicator.style.left = `${e.pageX - 2}px`;
            template?.parentElement?.appendChild(clickIndicator);
            setTimeout(() => clickIndicator.remove(), 500);
        };

        body.addEventListener('mousemove', throttledCursorTrack as EventListener, { passive: true });
        body.addEventListener('click', handleClick, { passive: true });

        return () => {
            body.removeEventListener('mousemove', throttledCursorTrack as EventListener);
            body.removeEventListener('click', handleClick);
        };
    }, [isEnabled, throttledCursorTrack]);

    if (!isEnabled) return null;

    return (
        <>
            <span className="cursor w-[20px] h-[20px] translate-[-7px] absolute z-50 pointer-events-none hidden lg:inline-block duration-50" />
            <div className="cursor-clicked w-[20px] h-[20px] translate-[-7px] absolute z-50 pointer-events-none hidden">
                <svg className="w-[30px] h-[30px] translate-x-[-18px] translate-y-[-16px]" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className="rect-animate" x="479.998" width="40" height="387" rx="20" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="45.7148" x="290.179" width="40" height="387" rx="20" transform="rotate(-22.5 290.179 45.7148)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="160.59" x="132.303" width="40" height="387" rx="20" transform="rotate(-45 132.303 160.59)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="327.139" x="30.4053" width="40" height="387" rx="20" transform="rotate(-67.5 30.4053 327.139)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="520.004" width="40" height="387" rx="20" transform="rotate(-90 0 520.004)" fill="var(--color-amber-500)" />
                </svg>
            </div>
        </>
    );
};

export default Cursor;
