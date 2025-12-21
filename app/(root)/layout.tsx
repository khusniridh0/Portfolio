import { ErrorBoundary } from "@/components/client/error-boundary";
import { AllProvider } from "@/contexts/public-context";
import GlobalInteractions from "@/components/client/global-interactions";
import Loading from "@/components/client/loading";

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