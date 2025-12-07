'use client'

import { Children, useEffect, useRef, useState } from "react";

interface CarouselResponsive {
    breakpoint: number;
    perview: number;
}

interface CarouselNav {
    next: React.ReactNode;
    prev: React.ReactNode;
    position: {
        x: 'center' | 'start' | 'end' | 'between';
        y: 'top' | 'bottom';
    }
}

interface CarouselConfig {
    gap: number;
    responsive: CarouselResponsive[];
    nav: CarouselNav;
}

const initialState = {
    status: false,
    startX: 0,
    scrollLeft: 0
}

const Carousel = ({ config, children }: { config: CarouselConfig, children: React.ReactNode }) => {
    const carousel = useRef<HTMLDivElement>(null);
    const carouselItems = useRef<HTMLDivElement>(null);
    const { responsive, gap, nav } = config;
    const { next, prev, position: { x, y } } = nav;
    const xy = `${y} ${x}`
    const [perview, setPerview] = useState(1);
    const [drag, setDrag] = useState(initialState);

    const dragged = (event: React.MouseEvent) => {
        event.preventDefault();
        setDrag({ status: true, startX: event.pageX, scrollLeft: event.currentTarget.scrollLeft })
    }

    const track = (event: React.MouseEvent) => {
        event.preventDefault();
        if (!drag.status) return;
        const carousel = event.currentTarget;
        const newScrollLeft = drag.scrollLeft + ((drag.startX - event.pageX) * 1.5);
        carousel.scrollLeft = Math.max(0, Math.min(carousel.scrollWidth - carousel.clientWidth, newScrollLeft));
    }

    const swipe = (event: React.MouseEvent) => {
        event.preventDefault();

        const current = carousel.current;
        const items = carouselItems.current;

        if (!current || !items) return

        const scrollWidth = current.scrollWidth;
        const clientWidth = items.clientWidth;
        const direction = event.currentTarget.getAttribute('data-direction') as 'next' | 'prev'; // Define possible values

        const newScrollLeft = direction === 'next'
            ? Math.min(scrollWidth - clientWidth, current.scrollLeft + clientWidth)
            : Math.max(0, current.scrollLeft - clientWidth);

        current.scrollLeft = newScrollLeft;
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const perview = responsive.find(responsiveItem => responsiveItem.breakpoint <= width)?.perview ?? 0;
            setPerview(perview);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="carousel py-12 relative">
            <div className="carousel-content" onMouseMove={track} onMouseDown={dragged} onMouseUp={() => setDrag(initialState)} onMouseLeave={() => setDrag(initialState)} ref={carousel} style={{ '--perview': `${perview}`, '--gap': `${gap}px` } as React.CSSProperties}>
                {Children?.map(children, (item, i) => (
                    <div className="carousel-item" key={i} ref={carouselItems}>
                        {item}
                    </div>
                ))}
            </div>

            {(prev && next) &&
                <div className={`carousel-nav absolute gap-4 w-full flex ${xy}`}>
                    <button type="button" className="block" aria-label="prev" data-direction="prev" onClick={swipe}>
                        {prev}
                    </button>
                    <button type="button" className="block" aria-label="next" data-direction="next" onClick={swipe}>
                        {next}
                    </button>
                </div>
            }
        </div>
    );
}

export default Carousel;