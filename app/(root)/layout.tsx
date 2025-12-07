import Cursor from "../components/cusrsor";
import Event from "../components/event";
import Loading from "../components/loading";
import { AllProvider } from "../contexts/public-context";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <AllProvider>
            <Cursor />
            <Loading />
            <div className="max-h-screen overflow-x-hidden main-layout scroll-smooth" >
                <div className="container mx-auto relative">
                    {children}
                </div>
            </div>
            <Event />
        </AllProvider>
    )
}

export default layout;