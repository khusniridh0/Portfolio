export const dynamic = "force-dynamic";
import Carousel from "@/app/components/carousel";
import { ArrowLeft, ArrowRight } from "@/app/components/icons";
import { Backwork } from "@/app/components/works";
import { dataContact } from "@/app/services/main";
import { request } from "@/app/utils/api";
import ImageSkeleton from "next/image";
import Link from "next/link";

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
    drag: boolean,
    responsive: CarouselResponsive[];
    nav: CarouselNav;
}

interface ProjectProps {
    params: {
        slug: string;
    }
}

interface Stack {
    name: string;
    image: string;
}

const ProjectDetail = async ({ params }: ProjectProps) => {
    const { slug } = await params
    const res = await request.get('project', { params: { slug } })
    const { data } = res
    const carouselConfig: CarouselConfig = {
        gap: 20,
        drag: true,
        responsive: [
            {
                breakpoint: 1024,
                perview: 2
            },
            {
                breakpoint: 100,
                perview: 1
            }
        ],
        nav: {
            next: <NextArrow />,
            prev: <PrevArrow />,
            position: {
                x: 'end',
                y: 'top'
            }
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-screen py-4 z-10 backdrop-filter backdrop-blur-xl bg-[var(--body-50)]">
                <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-6 mx-auto">
                    <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6 self-end lg:self-center lg:order-2">
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-semibold inline-block">[</span>
                            <span className="text-xs font-semibold inline-block capitalize mt-1">ESC</span>
                            <span className="text-xl font-semibold inline-block">]</span>
                        </div>
                        <Backwork />
                    </div>
                    <h1 className="text-lg font-semibold flex lg:order-1 self-start lg:self-center">
                        <span className="capitalize block">My works</span>
                        <span className="mx-3">|</span>
                        <span className="capitalize block">
                            {data.detail.category}
                        </span>
                    </h1>
                </div>
            </div>

            <div className="content mt-38 lg:mt-28">
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-10">
                    <div className="col-span-12 lg:col-span-1 flex lg:flex-col justify-around lg:justify-start items-center gap-6">
                        {dataContact.map((contact, i) => (
                            <Link href={contact.link} target="_blank" key={i} className="flex items-center gap-3 lg:py-3">
                                <ImageSkeleton src={contact.image} width={48} height={48} alt="" className="w-auto h-12" loading="lazy" />
                            </Link>
                        ))}
                    </div>
                    <div className="horizon w-full h-px my-4 col-span-12 lg:hidden" />
                    <div className="col-span-12 lg:col-span-7">
                        <h1 className="text-2xl font-bold w-fit capitalize">
                            {data.name}
                            <div className="horizon w-full h-px my-4" />
                        </h1>
                        <p>{data.desc}</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <h1 className="text-2xl font-bold w-fit">
                            Stack Tech
                            <div className="horizon w-full h-px my-4" />
                        </h1>
                        <div className="flex flex-wrap justify-start items-start gap-4">
                            {data.detail.stack.map((stack: Stack, i: number) => (
                                <div className="flex h-fit gap-2 items-center rounded-full border-primary py-2 px-2" key={i}>
                                    <span className="relative">
                                        <ImageSkeleton src={stack.image} width={32} height={32} alt="technology" className="w-auto h-5" loading="lazy" />
                                    </span>
                                    <span className="text-sm mr-2">{stack.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <Carousel config={carouselConfig}>
                    <ImageSkeleton src={data.image} alt={data.name} width={1024} height={768} loading="lazy" />
                    {data.detail.images.map((image: string, i: number) => (
                        <ImageSkeleton src={image} alt={data.name} width={1024} height={768} loading="lazy" key={i} />
                    ))}
                </Carousel>
            </div>
        </>
    )
}

const NextArrow = () => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 py-3 px-4 -translate-y-2">
        <ArrowRight color="var(--color-white)" size={20} />
    </div>
}

const PrevArrow = () => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 py-3 px-4 -translate-y-2">
        <ArrowLeft color="var(--color-white)" size={20} />
    </div>
}

export default ProjectDetail;