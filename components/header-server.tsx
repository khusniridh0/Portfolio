import Image from "next/image";
import Link from "next/link";
import { ChangeTheme } from "./client/header-client";
import { MenuComponent, ToggleMenu } from "./client/header";

const navItem = [
    { link: '#hero', text: 'Home' },
    { link: '#about', text: 'About' },
    { link: '#skill', text: 'Skill' },
    { link: '#works', text: 'Project' },
    { link: '#cta', text: 'Contact' }
]

export const HeaderI = () => {
    return (
        <header id="main-nav" className="flex justify-between items-center sticky top-5">
            <Link href='/' draggable={false}>
                <Image src="/logo/logo-91x80.webp" width={76} height={76} alt="Khusni Ridho" className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" loading="eager" draggable={false} />
            </Link>
            <MenuComponent items={navItem} />
            <ToggleMenu />

            <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                <ChangeTheme />
            </div>
        </header>
    )
}

export const HeaderII = () => {
    return (
        <header id="main-nav" className="flex justify-between items-center sticky top-5">
            <Link href='/' draggable={false}>
                <Image src="/logo/logo-91x80.webp" width={76} height={76} alt="Khusni Ridho" className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" loading="eager" priority draggable={false} />
            </Link>

            <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                <ChangeTheme />
            </div>
        </header>
    )
}
