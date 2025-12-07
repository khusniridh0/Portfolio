'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Loading = () => {
    const pathname = usePathname();

    const [ready, setReady] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        const timeoutReady = setTimeout(() => {
            setReady(() => true); // Mengupdate berdasarkan nilai sebelumnya
        }, 0);

        const timeoutShow = setTimeout(() => {
            setShow(() => true);
        }, 0);

        const cleanupReady = setTimeout(() => {
            setReady(() => false);
        }, 100);

        const cleanupShow = setTimeout(() => {
            setShow(() => false);
        }, 1200);

        return () => {
            clearTimeout(timeoutReady);
            clearTimeout(timeoutShow);
            clearTimeout(cleanupReady);
            clearTimeout(cleanupShow);
        };
    }, [pathname]);


    return (
        show && <div className="h-screen w-screen fixed top-0 left-0 overflow-hidden z-40 grid grid-cols-6 grid-rows-2">
            {[...Array(6)].map((_, i) => (
                <div className="w-full h-full" key={i}>
                    <div className={`${!ready && 'loading-up'} loading`} style={{ '--delay': `${i}ms` } as React.CSSProperties}></div>
                </div>
            ))}
            {[...Array(6)].map((_, i) => (
                <div className="w-full h-full" key={i}>
                    <div className={`${!ready && 'loading-down'} loading`} style={{ '--delay': `${i}ms` } as React.CSSProperties}></div>
                </div>
            ))}
        </div>
    );
}

export default Loading;