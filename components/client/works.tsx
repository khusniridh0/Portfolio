'use client'

import Carousel from "@/components/client/carousel";
import { Close, ExternalLink } from "@/components/icons";
import { AllContext } from "@/contexts/public-context";
import type { CarouselConfig, Works } from '@/types';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

export const ActiveWorks = ({ dataWorks }: { dataWorks: Works[] }) => {
    const [active, setActive] = useState(dataWorks?.[0] || null);

    const handleItemClick = useCallback((item: Works) => {
        setActive(item);
    }, []);

    if (!active) return null;

    return (
        <div className="benner-content relative mb-8">
            <Image src={active.image} alt="Banner" width={720} height={400} className="w-full rounded-1 aspect-[9/16] md:aspect-[4/3] lg:aspect-video object-cover" priority draggable={false} />
            <div className="banner-attribute flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-end absolute bottom-0 left-0 p-4 w-full">
                <div className="banner-caption flex-2 text-white">
                    <Link href={`/project/${active.slug}`} className="inline-block text-2xl lg:text-5xl font-semibold capitalize underline underline-offset-4 lg:mb-6 lg:underline-offset-6 text-nowrap text-truncate" draggable={false}>
                        {active.name}
                        <sup className="inline-block ml-2"><ExternalLink color="#fff" size={16} /></sup>
                    </Link>
                    <p className="text-sm lg:text-lg  text-ellipsis line-clamp-3">{active.desc}</p>
                </div>
                <div className="banner-other flex gap-4 flex-1 lg:justify-end">
                    {dataWorks.map((item, i) => (
                        <div className="other-item" key={i} onClick={() => handleItemClick(item)}>
                            <span className="flex text-sm lg:text-md font-semibold mb-2 text-white">
                                [ {i + 1} ]
                            </span>
                            <Image src={item.image} alt={item.name} width={125} height={167} className="w-24 lg:w-34 aspect-[3/4] object-cover" loading="lazy" draggable={false} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const SliderWork = ({ dataWorks, config }: { dataWorks: Works[], config: CarouselConfig }) => {
    return (
        <div className="clip-banner gap-4">
            <div className="clip-banner-content">
                <Carousel config={{ ...config }}>
                    {dataWorks.map((item, i) => (
                        <Link href={`/project/${item.slug}`} className="clip-banner-item aspect-[4/3] rounded-1 overflow-hidden block" draggable={false} key={i}>
                            <Image src={item.image} alt={item.name} width={411} height={308} className="w-full h-full object-cover" loading="lazy" draggable={false} />
                        </Link>
                    ))}
                    <Link href='/project' className="aspect-[4/3] rounded-1 overflow-hidden block" draggable={false}>
                        <Image src="/project/all-project.gif" alt="All Project" width={411} height={308} className="w-full h-full object-cover" loading="lazy" unoptimized draggable={false} />
                    </Link>
                </Carousel>
            </div>
        </div>
    )
}

export const Backwork = () => {
    const { setSection } = useContext(AllContext)!;
    const router = useRouter()
    const closeProject = useCallback(() => { setSection('works'); router.back() }, [setSection, router])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeProject();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, [closeProject])

    return <button type="button" className="border-primary h-10 w-10 flex-items-center-justify-center rounded-full" aria-label="close" onClick={closeProject}>
        <Close color="var(--text-content)" size={20} />
    </button>
}