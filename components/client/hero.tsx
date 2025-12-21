'use client'

import { useContext, useMemo } from "react";
import Image from "next/image";
import { AllContext } from "@/contexts/public-context";

const blurPlaceholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YHCAw6L73Pv4gAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12P4//8/AwAI/AL+lmE2HQAAAABJRU5ErkJggg==";

const Avatar = () => {
    const { theme } = useContext(AllContext)!;

    const imageProps = useMemo(() => {
        const isDark = theme === 'dark';
        return {
            src: isDark ? "/picture/avatar-dark.png" : "/picture/avatar-light.png"
        };
    }, [theme]);

    return (
        <Image
            src={imageProps.src}
            width={610}
            height={767}
            alt="Khusni Ridho"
            placeholder="blur"
            blurDataURL={blurPlaceholder}
            preload={true}
            fetchPriority="high"
            sizes="(min-width:1024px) 610px, 80vw"
            className="block transition-opacity duration-300"
        />
    )
}

export default Avatar;