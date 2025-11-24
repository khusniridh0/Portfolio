import { useEffect, useState } from "react";

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('load', setLoading(false));
            return () => {
                window.removeEventListener('load', setLoading(false));
            }
        }, 100)
        
        setTimeout(() => {
            window.addEventListener('load', setShow(false));
            return () => {
                window.removeEventListener('load', setShow(false));
            }
        }, 1100)
    }, [])

    return (
        show && <div className="h-screen w-screen fixed top-0 left-0 overflow-hidden z-40 grid grid-cols-6 grid-rows-2">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`${loading ? '' : 'loading-up'} bg-[#FFDD99] w-full h-full`} style={{ '--delay': `${i}ms` }}></div>
            ))}
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`${!loading && 'loading-down'} bg-[#FFDD99] w-full h-full`} style={{ '--delay': `${i}ms` }}></div>
            ))}
        </div>
    );
}

export default LoadingPage;