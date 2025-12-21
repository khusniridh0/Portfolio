'use client'

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const ImageSkeleton = ({ src, width, height, alt, className, ...rest }: ImageProps) => {
    const [loading, setLoading] = useState(true);
    const commonStyle = { width, height };
    const handleLoadComplete = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && (<div className={`${className || ''} bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse hidden md:block`} style={commonStyle} />)}
            <Image src={src} width={width} height={height} alt={alt} className={`${className || ''} transition-opacity duration-300 ${loading ? 'md:absolute md:top-0 md:left-0 md:opacity-0 md:z-0' : 'opacity-100'}`} onLoad={handleLoadComplete} onError={handleLoadComplete}  {...rest} />
        </>
    );
};

export default ImageSkeleton;