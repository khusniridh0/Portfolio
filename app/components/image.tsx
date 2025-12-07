'use client'

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const ImageSkeleton = ({ src, width, height, alt, className, ...rest }: ImageProps) => {
    const [loading, setLoading] = useState(true);
    const commonStyle = { minWidth: width, minHeight: height };

    const handleLoadComplete = () => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <>
            {loading && (<div className="relative" style={commonStyle}>
                <div className={`${className || ''} absolute bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse w-full h-full`} />
            </div>
            )}
            <Image src={src} width={width} height={height} alt={alt} className={`${className || ''} transition-opacity duration-300 ${loading ? 'absolute opacity-0 z-0' : ' opacity-100'}`} onLoadingComplete={handleLoadComplete} onError={handleLoadComplete} {...rest} />
        </>
    );
};

export default ImageSkeleton;