'use client'

import { usePathname } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import { AllContext } from "@/app/contexts/public-context";
import { scrolling } from "@/app/utils/event";
import { throttle } from "@/app/utils/func";

const Event = () => {
    const { setMenu } = useContext(AllContext)!;
    const pathname = usePathname();
    const [enabled, setEnabled] = useState(true);

    const throttledChangeActive = useMemo(
        () => throttle((event: MouseEvent) => {
            scrolling(event);
            setMenu(false);
        }, 100),
        [setMenu]
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateState = () => setEnabled(!mediaQuery.matches);
        updateState();
        mediaQuery.addEventListener('change', updateState);
        return () => mediaQuery.removeEventListener('change', updateState);
    }, []);

    useEffect(() => {
        if (!pathname.includes('/project/')) return;
        const mainLayout = document.querySelector<HTMLElement>('.main-layout');
        if (!mainLayout) return;

        setTimeout(() => {
            mainLayout.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        mainLayout.classList.add('showing');
        const timeout = setTimeout(() => {
            mainLayout.classList.remove('showing');
        }, 800);

        return () => clearTimeout(timeout);
    }, [pathname]);

    useEffect(() => {
        if (!enabled) return;
        const mainLayout = document.querySelector<HTMLElement>('.main-layout');
        if (!mainLayout) return;

        document.querySelectorAll('img').forEach((img) => {
            img.setAttribute('draggable', 'false');
        });

        mainLayout.addEventListener('scroll', throttledChangeActive as EventListener, { passive: true });
        return () => {
            mainLayout.removeEventListener('scroll', throttledChangeActive as EventListener);
        };
    }, [throttledChangeActive, enabled]);

    return null;
}

export default Event;
