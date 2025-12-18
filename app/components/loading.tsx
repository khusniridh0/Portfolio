'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Loading = () => {
    const pathname = usePathname();

    const [ready, setReady] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(true);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);
        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const cleanupReady = setTimeout(() => {
            setReady(() => false);
        }, 100);

        const cleanupShow = setTimeout(() => {
            setShow(() => false);
        }, 1200);

        return () => {
            clearTimeout(cleanupReady);
            clearTimeout(cleanupShow);
        };
    }, [pathname, prefersReducedMotion]);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        show && <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden z-40 grid grid-cols-6 grid-rows-2">
            {[...Array(6)].map((_, i) => (
                <div className={`w-full h-full loading ${!ready && 'loading-up'}`} key={i} style={{ '--delay': `${i}ms` } as React.CSSProperties}/>
            ))}
            {[...Array(6)].map((_, i) => (
                <div className={`w-full h-full loading ${!ready && 'loading-down'}`} key={i} style={{ '--delay': `${i}ms` } as React.CSSProperties}/>
            ))}
        </div>
    );
}

export default Loading;
