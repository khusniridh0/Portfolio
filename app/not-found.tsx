import Image from "next/image";
import Link from "next/link";
import Cursor from "./components/cusrsor";
import { AllProvider } from "./contexts/public-context";

const NotFound = () => {
    return (
        <AllProvider>
            <Cursor />
            <div className="container mx-auto">
                <div className="max-h-screen h-screen w-full flex flex-col xl:flex-row items-center justify-center xl:justify-around bg-[var(--body)]">
                    <div className="text-center xl:text-left order-2 xl:order-1">
                        <h1 className="text-6xl lg:text-8xl font-bold mb-4">Uh, ohh!</h1>
                        <h2 className="text-2xl lg:text-4xl mb-4">We Sincerely Apologize</h2>
                        <h3 className="text-1xl lg:text-2xl mb-10">We can’t find the page that you are looking for!</h3>
                        <Link href="/" className="btn w-fit rounded-full border-gradient mt-6 mx-auto xl:mx-0">
                            <span>Back to Home</span>
                        </Link>
                    </div>
                    <Image src="/picture/error-404.svg" alt="" width={800} height={800} className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto order-1 xl:order-2" loading="eager" />
                </div>
            </div>
        </AllProvider>
    );
}

export default NotFound;