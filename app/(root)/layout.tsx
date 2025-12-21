import { ErrorBoundary } from "@/components/error-boundary";
import { AllProvider } from "@/contexts/public-context";
import GlobalInteractions from "@/components/global-interactions";
import Loading from "@/components/loading";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <AllProvider>
            <ErrorBoundary>
            <GlobalInteractions />
            <Loading />
            <div className="max-h-screen overflow-x-hidden main-layout scroll-smooth" >
                <main className="global-container mx-auto relative">
                    {children}
                </main>
            </div>
            </ErrorBoundary>
        </AllProvider>
    )
}

export default layout;