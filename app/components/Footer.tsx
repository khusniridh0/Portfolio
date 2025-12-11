const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-between items-center py-6 gap-6 mt-10">
            <div className="horizon w-full h-px" />
            <div className="text-sm font-medium">♥️ {new Date().getFullYear()} Created By Khusni Ridho</div>
            <div className="text-sm font-medium">Showcase</div>
        </footer>
    );
}

export default Footer;