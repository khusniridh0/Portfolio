'use client'

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

const ImageSkeleton = ({ src, width, height, alt, className, ...rest }: ImageProps) => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const commonStyle = { width, height };
    const handleLoadComplete = () => {
        setLoading(false); 
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleChange = () => setIsMobile(mediaQuery.matches);
        
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (isMobile ? (
        <Image src={src} width={width} height={height} alt={alt} className={className} {...rest} />
    ) : (<>
        {loading && <div className={`${className || ''} bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse`} style={commonStyle} />}
        <Image src={src} width={width} height={height} alt={alt} className={`${className || ''} transition-opacity duration-300 ${loading ? 'absolute top-0 left-0 opacity-0 z-0' : ' opacity-100'}`} onLoadingComplete={handleLoadComplete} onError={handleLoadComplete} {...rest} />
    </>));
};

export default ImageSkeleton;