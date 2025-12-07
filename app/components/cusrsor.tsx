'use client'

import { useEffect } from "react";
import { select } from "../utils/func";

const Cursor = () => {

    const cursorTreck = (e: MouseEvent) => {
        const cursor = select('.cursor').target ?? undefined;
        cursor?.setAttribute('style', `top: ${e.pageY - 2}px; left: ${e.pageX - 2}px;`);
    }

    const cursorClicked = (e: MouseEvent) => {
        const clicked = select('.cursor-clicked').target ?? undefined;
        const cursor = clicked?.cloneNode(true) as HTMLElement

        cursor.classList.add('clicked')
        cursor.style.top = `${e.pageY - 2}px`
        cursor.style.left = `${e.pageX - 2}px`
        clicked?.parentElement?.appendChild(cursor);
        setTimeout(() => {
            cursor.remove();
        }, 500)
    }

    useEffect(() => {
        const body = select('body');

        if (body) {
            body.event('mousemove', cursorTreck as EventListener);
            body.event('click', cursorClicked as EventListener);

            return () => {
                body.removeEvent('mousemove', cursorTreck as EventListener);
                body.removeEvent('click', cursorClicked as EventListener);
            };
        }
    });

    return (
        <>
            <span className="cursor w-[20px] h-[20px] translate-[-7px] absolute z-50 pointer-events-none hidden lg:inline-block" />
            <div className="cursor-clicked w-[20px] h-[20px] translate-[-7px] absolute z-50">
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
}

export default Cursor;