import Cursor from "@/app/components/cusrsor";
import ErrorNotFound from "@/app/components/error-404";
import { AllProvider } from "@/app/contexts/public-context";

const NotFound = () => {
    return (
        <AllProvider>
            <Cursor />
            <ErrorNotFound />
        </AllProvider>
    );
}

export default NotFound;