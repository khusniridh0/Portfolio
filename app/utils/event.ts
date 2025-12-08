import { select } from "./func";

export const scrolling = (event: MouseEvent) => {
    event.preventDefault();
    const virtualWindow = event.currentTarget;
    const header = document.querySelector<HTMLDivElement>('#main-nav nav');
    const navs = header ? Array.from(header.children) : [];
    const offset = 200;

    navs.forEach(nav => {
        if (nav.hasAttribute('href')) {
            const target = nav.getAttribute('href')?.slice(1) ?? '';
            const element = document.querySelector<HTMLDivElement>(`#${target}`);
            const scrollPosition = virtualWindow instanceof HTMLElement
                ? virtualWindow.scrollTop
                : virtualWindow instanceof Window
                    ? virtualWindow.scrollY
                    : 0;

            if (element && (element.offsetTop - offset <= Math.trunc(scrollPosition))) {
                navs.forEach(navItem => navItem.classList.remove('active'));
                nav.classList.add('active');
            }
        }
    });
}

export const scrolled = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetElement = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    const target = targetElement?.getAttribute('href')?.slice(1) ?? '';
    const element = select(`#${target}`).target
    element?.scrollIntoView()
}