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
        setTimeout(() => {
            if (section == 'works') {
                const works = select('#works').target as HTMLElement;
                works.scrollIntoView();
                setSection('')
            }
        }, 500)
    })

    useEffect(() => {
        select.all('img').forEach(({ target }) => {
            target?.setAttribute('draggable', 'false');
        });

        select('.main-layout').event('scroll', changeActive as EventListener);

        return () => {
            select('.main-layout').removeEvent('scroll', changeActive as EventListener);
        };
    });

    return (<></>);
}

export default Event;