import LoadingPage from "../components/loading-page";

const LandingLayout = ({ children }) => {
    const cursorTreck = (e) => {
        const cursor = document.querySelector('.cursor');
        cursor.classList.remove('hidden')
        cursor.style.top = `${e.pageY - 2}px`;
        cursor.style.left = `${e.pageX - 2}px`;
    }

    const cursorClicked = (e) => {
        const clicked = document.querySelector('.cursor-clicked');
        const cursor = clicked.cloneNode(true);

        cursor.style.top = `${e.pageY - 2}px`;
        cursor.style.left = `${e.pageX - 2}px`;
        cursor.classList.add('clicked')
        clicked.parentElement.appendChild(cursor);
        setTimeout(() => {
            cursor.remove();
        }, 500)
    }

    const scrolled = (e) => {
        const virtualWindow = e.currentTarget;
        const header = document.querySelector('#main-nav nav');
        const navs = Array.from(header.children);
        const offset = 200;

        navs.forEach(nav => {
            if (nav.hasAttribute('href')) {
                const target = nav.getAttribute('href').slice(1)
                const element = document.querySelector(`#${target}`)

                if (element.offsetTop - offset <= Math.round(virtualWindow.scrollTop)) {
                    navs.forEach(nav => nav.classList.remove('active'));
                    nav.classList.add('active')
                }
            }
        })
    }

    return (
        <>
            <div className="cursor-clicked w-[20px] h-[20px] translate-[-7px] absolute z-50">
                <svg className="w-[30px] h-[30px] translate-x-[-18px] translate-y-[-16px]" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className="rect-animate" x="479.998" width="40" height="387" rx="20" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="45.7148" x="290.179" width="40" height="387" rx="20" transform="rotate(-22.5 290.179 45.7148)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="160.59" x="132.303" width="40" height="387" rx="20" transform="rotate(-45 132.303 160.59)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="327.139" x="30.4053" width="40" height="387" rx="20" transform="rotate(-67.5 30.4053 327.139)" fill="var(--color-amber-500)" />
                    <rect className="rect-animate" y="520.004" width="40" height="387" rx="20" transform="rotate(-90 0 520.004)" fill="var(--color-amber-500)" />
                </svg>
            </div>
            <span className="cursor w-[20px] h-[20px] translate-[-7px] absolute z-50 pointer-events-none hidden" />
            <LoadingPage />
            <div className="max-h-screen overflow-x-hidden" onScroll={scrolled} onMouseMove={cursorTreck} onMouseUp={cursorClicked}>
                <div className="container mx-auto relative">
                    {children}
                </div>
            </div>
        </>
    )
}

export default LandingLayout