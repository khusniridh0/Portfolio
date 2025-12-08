'use client'

import { useContext } from "react";
import { AllContext } from "../contexts/public-context";
import ImageSkeleton from "./image";

const Avatar = () => {
    const { theme } = useContext(AllContext)!;

    return theme == 'dark' ? (
        <ImageSkeleton src="/picture/avatar-dark.png" width={610} height={767} alt="Khusni Ridho" className="hidden dark:block" loading="eager" />
    ) : (
        <ImageSkeleton src="/picture/avatar-light.png" width={610} height={767} alt="Khusni Ridho" className="block dark:hidden" loading="eager" />
    )
}

export default Avatar;