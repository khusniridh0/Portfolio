'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Loading = () => {
    const pathname = usePathname();

    const [ready, setReady] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
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
    }, [pathname]);


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