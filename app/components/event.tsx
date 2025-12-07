'use client'

import { useContext, useEffect } from "react";
import { AllContext } from "../contexts/public-context";
import { scrolling } from "../utils/event";
import { select } from "../utils/func";

const Event = () => {
    const { setMenu, section, setSection } = useContext(AllContext)!;

    const changeActive = (event: MouseEvent) => {
        scrolling(event);
        setMenu(false);
    };

    useEffect(() => {
        const mainLayout = select('.main-layout').target as HTMLElement;
        
        setTimeout(() => {
            if (section == 'works') {
                const works = select('#works').target as HTMLElement;
                mainLayout.classList.remove('scroll-smooth');
                works.scrollIntoView();
                setSection('home')
            }
            mainLayout.classList.add('scroll-smooth');
        }, 500)
    })

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