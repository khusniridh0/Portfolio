'use client'

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

const ImageSkeleton = ({ src, width, height, alt, className, ...rest }: ImageProps) => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(true);
    const commonStyle = { width, height };

    const handleLoadComplete = () => {
        setLoading(false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 768) {
                setIsMobile(false)
            }
        }
    });

    return isMobile ? (
        <Image src={src} width={width} height={height} alt={alt} className={className} {...rest} />
    ) : (<>
        {loading && <div className={`${className || ''} bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse`} style={commonStyle} />}
        <Image src={src} width={width} height={height} alt={alt} className={`${className || ''} transition-opacity duration-300 ${loading ? 'absolute opacity-0 z-0' : ' opacity-100'}`} onLoadingComplete={handleLoadComplete} onError={handleLoadComplete} {...rest} />
    </>);
};

export default ImageSkeleton;