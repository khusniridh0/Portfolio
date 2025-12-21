import type React from 'react';

export interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export interface NavItem {
    link: string;
    text: string;
}

export interface Tab {
    title: string;
    component: React.JSX.Element;
    key: string;
}

export interface CarouselResponsive {
    breakpoint: number;
    perview: number;
}

export interface CarouselNav {
    next: React.ReactNode;
    prev: React.ReactNode;
    position: {
        x: 'center' | 'start' | 'end' | 'between';
        y: 'top' | 'bottom';
    };
}

export interface CarouselConfig {
    gap: number;
    drag: boolean;
    responsive: CarouselResponsive[];
    nav: CarouselNav;
}
