import Image from "next/image";
import Link from "next/link";
import { ChangeTheme } from "./header-client";

export const HeaderII = () => {
    return (
        <header id="main-nav" className="flex justify-between items-center sticky top-5">
            <Link href='/'>
                <Image 
                    src="/logo/logo-91x80.webp" 
                    width={76} 
                    height={76} 
                    alt="Khusni Ridho" 
                    className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" 
                    loading="eager" 
                    priority
                />
            </Link>

            <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                <ChangeTheme />
            </div>
        </header>
    )
}
