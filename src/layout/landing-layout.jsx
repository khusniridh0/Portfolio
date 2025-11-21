const LandingLayout = ({ children }) => {
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
        <div className="max-h-screen overflow-x-hidden" onScroll={scrolled}>
            <div className="container mx-auto relative">
                {children}
            </div>
        </div>
    );
}

export default LandingLayout