import { ErrorBoundary } from "@/app/components/error-boundary";
import { AllProvider } from "@/app/contexts/public-context";
import GlobalInteractions from "@/app/components/global-interactions";
import Loading from "@/app/components/loading";

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