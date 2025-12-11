'use client'

import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { AllContext } from "../contexts/public-context";
import { scrolling } from "../utils/event";
import { select } from "../utils/func";

const Event = () => {
    const { setMenu } = useContext(AllContext)!;
    const pathname = usePathname();

    const changeActive = (event: MouseEvent) => {
        scrolling(event);
        setMenu(false);
    };

    const preload = () => {
        const mainLayout = select('.main-layout').target as HTMLElement;
        setTimeout(() => {
            select('.main-layout').target!.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100)
        
        mainLayout.classList.add('showing');
        setTimeout(() => {
            mainLayout.classList.remove('showing');
        }, 800)
    }

    useEffect(() => { if (pathname.includes('/project/')) preload() }, [pathname]);
    useEffect(() => {
        const mainLayout = select('.main-layout')
        select.all('img').forEach(({ target }) => {
            target?.setAttribute('draggable', 'false');
        });


        mainLayout.event('scroll', changeActive as EventListener);

        return () => {
            mainLayout.removeEvent('scroll', changeActive as EventListener);
        };
    });

    return (<></>);
}

export default Event;