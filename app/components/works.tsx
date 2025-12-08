'use client'

import { AllContext } from "@/app/contexts/public-context";
import { Close, ExternalLink } from "@/app/components/icons";
import ImageSkeleton from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { select } from "../utils/func";
import Carousel from "./carousel";
import Link from "next/link";

interface Works {
    name: string;
    image: string;
    desc: string;
}

interface CarouselResponsive {
    breakpoint: number;
    perview: number;
}

interface CarouselNav {
    next: React.ReactNode;
    prev: React.ReactNode;
    position: {
        x: 'center' | 'start' | 'end' | 'between';
        y: 'top' | 'bottom';
    }
}

interface CarouselConfig {
    gap: number;
    drag: boolean;
    responsive: CarouselResponsive[];
    nav: CarouselNav;
}

interface CarouselProps {
    name: string;
    detail: {
        images: string[]
    };
}

export const ActiveWorks = ({ dataWorks }: { dataWorks: Works[] }) => {
    const { setReread } = useContext(AllContext)!;
    const [active, setActive] = useState(dataWorks[0]);
    const router = useRouter();

    return (
        <div className="benner-content relative mb-8">
            <ImageSkeleton src={active.image} alt="Banner" width={720} height={400} className="w-full rounded-1 aspect-[9/16] md:aspect-[4/3] lg:aspect-video object-cover" loading="lazy" />
            <div className="banner-attribute flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-end absolute bottom-0 left-0 p-4 w-full">
                <div className="banner-caption flex-2 text-white">
                    <div className="inline-block text-2xl lg:text-5xl font-semibold capitalize underline underline-offset-4 lg:mb-6 lg:underline-offset-6 text-nowrap text-truncate" onClick={() => { setReread(active); router.push('/project') }}>
                        {active.name}
                        <sup className="inline-block ml-2"><ExternalLink color="#fff" size={16} /></sup>
                    </div>
                    <p className="text-sm lg:text-lg  text-ellipsis line-clamp-3">{active.desc}</p>
                </div>
                <div className="banner-other flex gap-4 flex-1 lg:justify-end">
                    {dataWorks.slice(0, 3).map((item, i) => (
                        <div className="other-item" key={i} onClick={() => setActive(item)}>
                            <span className="flex text-sm lg:text-md font-semibold mb-2 text-white">
                                [ {i + 1} ]
                            </span>
                            <ImageSkeleton src={item.image} alt={item.name} width={125} height={167} className="w-24 lg:w-34 aspect-[3/4] object-cover" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const SliderWork = ({ dataWorks, config }: { dataWorks: Works[], config: CarouselConfig }) => {
    const { setReread } = useContext(AllContext)!;

    return (
        <div className="clip-banner gap-4">
            <div className="clip-banner-content">
                <Carousel config={{ ...config }}>
                    {dataWorks.slice(3).map((item, i) => (
                        <Link href="/project" className="clip-banner-item aspect-[4/3] rounded-1 overflow-hidden block" draggable={false} key={i} onMouseEnter={() => { setReread(item) }}>
                            <ImageSkeleton src={item.image} alt={item.name} width={411} height={308} className="w-full h-full object-cover" loading="lazy" />
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

interface WorkDetail {
    detail: {
        category: string;
    };
}

export const CategoryWork = () => {
    const { reread, setSection } = useContext(AllContext)! as {
        reread: WorkDetail | null;
        setSection: (section: string) => void;
    };

    const router = useRouter()
    const closeProject = useCallback(() => { setSection('works'); router.push("/") }, [setSection, router])
    useEffect(() => {
        if (!reread) closeProject()
    }, [reread, closeProject])

    return (
        <span className="capitalize block">
            {reread?.detail.category}
        </span>
    )
}

export const Backwork = () => {
    const { reread, setSection } = useContext(AllContext)!;
    const router = useRouter()
    const closeProject = useCallback(() => { setSection('works'); router.push("/") }, [setSection, router])

    useEffect(() => {
        if (!reread) closeProject()
    }, [reread, closeProject])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeProject();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    })

    return <button type="button" className="border-primary h-10 w-10 flex items-center justify-center rounded-full" aria-label="close" onClick={closeProject}>
        <Close color="var(--text-content)" size={20} />
    </button>
}

interface WorkContent {
    name: string;
    desc: string;
}

export const WorkContent = () => {
    const { reread } = useContext(AllContext)! as { reread: WorkContent | null };

    return <div className="col-span-12 lg:col-span-7">
        <h1 className="text-2xl font-bold w-fit capitalize">
            {reread?.name}
            <div className="horizon w-full h-px my-4" />
        </h1>
        <p>{reread?.desc}</p>
    </div>
}

interface StackWork {
    detail: {
        stack: {
            name: string;
            image: string;
        }[]
    };
}

export const StackWork = () => {
    const { reread } = useContext(AllContext)! as { reread: StackWork | null };

    return reread?.detail.stack.map((stack, i) => (
        <div className="flex h-fit gap-2 items-center rounded-full border-primary py-2 px-2" key={i}>
            <span className="relative">
                <span className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full bg-[var(--primary-50)] rounded-full blur-lg -z-10" />
                <ImageSkeleton src={stack.image} width={32} height={32} alt="technology" className="w-auto h-5" loading="lazy" />
            </span>
            <span className="text-sm mr-2">{stack.name}</span>
        </div>
    ))
}

export const CarouselWork = ({ config }: { config: CarouselConfig }) => {
    const pathname = usePathname()
    const { reread } = useContext(AllContext)! as { reread: CarouselProps | null };

    useEffect(() => {
        const timeout = setTimeout(() => {
            select('.main-layout').target!.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100)

        return () => clearTimeout(timeout)
    }, [pathname]);

    return <Carousel config={{ ...config }}>
        {reread?.detail.images.map((image, i) => (
            <ImageSkeleton src={image} alt={reread?.name} width={1024} height={768} key={i} loading="eager" />
        ))}
    </Carousel>
}