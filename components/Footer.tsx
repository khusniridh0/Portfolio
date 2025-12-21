import { memo } from "react";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = memo(() => {
    return (
        <footer className="flex flex-wrap justify-between items-center py-6 gap-6 mt-10">
            <div className="horizon w-full h-px" />
            <div className="text-sm font-medium">♥️ {CURRENT_YEAR} Created By Parkni</div>
            <div className="text-sm font-medium">Showcase</div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;