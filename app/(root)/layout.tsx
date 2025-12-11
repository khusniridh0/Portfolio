import Cursor from "@/app/components/cusrsor";
import Event from "@/app/components/event";
import Loading from "@/app/components/loading";
import { AllProvider } from "@/app/contexts/public-context";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <AllProvider>
            <Cursor />
            <Loading />
            <div className="max-h-screen overflow-x-hidden main-layout scroll-smooth" >
                <main className="container mx-auto relative">
                    {children}
                </main>
            </div>
            <Event />
        </AllProvider>
    )
}

export default layout;