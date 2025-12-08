'use client'

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

const ImageSkeleton = ({ src, width, height, alt, className, ...rest }: ImageProps) => {
    const [loading, setLoading] = useState(true);
    const [inMobile, setInMobile] = useState(true);
    const commonStyle = { width, height };

    const handleLoadComplete = () => {
        setLoading(false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) {
                setInMobile(false)
            }
        }
    });

    return inMobile ? (
        loading ? (
            <div className={`${className || ''} bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse`} style={commonStyle} />
        ) : (
            <Image src={src} width={width} height={height} alt={alt} className={`${className || ''} transition-opacity duration-300`} onLoadingComplete={handleLoadComplete} onError={handleLoadComplete} {...rest} />
        )
    ) : (
        <Image src={`${src}`} width={width} height={height} alt={`${alt}`} className={`${className}`} {...rest} />
    );
}

export default ImageSkeleton;