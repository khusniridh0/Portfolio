import { getProjectDetail } from "@/actions/project";
import Carousel from "@/components/client/carousel";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import ImageServer from "@/components/image-server";
import { Backwork } from "@/components/client/works";
import { dataContact } from "@/services/main";
import type { CarouselConfig, ProjectProps, ProjectResponse } from '@/types';
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";

export const revalidate = 3600;

export const generateMetadata = async ( { params }: ProjectProps ): Promise<Metadata>  => {
	const { slug } = await params;
	const response = await getProjectDetail(slug);
	const { data, status } = response as ProjectResponse;

	if (status === 'error' || !data) {
		return {
			title: 'Project Not Found',
			robots: { index: false, follow: false }
		};
	}

	const baseUrl = process.env.SITE_URL!;

	return {
		title: `${data.name} | Portfolio Khusni Ridho`,
		description: data.desc,
		openGraph: {
			title: `${data.name} | Portfolio Khusni Ridho`,
			description: data.desc,
			images: [
				{
					url: data.image,
					width: 1200,
					height: 630,
					alt: data.name,
				},
			],
			type: 'article',
		},
		twitter: {
			card: 'summary_large_image',
			title: data.name,
			description: data.desc,
			images: [data.image],
		},
		alternates: {
			canonical: `${baseUrl}/project/${slug}`,
		},
	};
}

const ProjectDetail = async ({ params }: ProjectProps) => {
    const { slug } = await params
    const response = await getProjectDetail(slug);
    const { data, status } = response as ProjectResponse
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

    if (status == 'error') return notFound()

    const baseUrl = process.env.SITE_URL!;
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": `${baseUrl}/project`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": data.name,
                "item": `${baseUrl}/project/${slug}`
            }
        ]
    };

    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: data.name,
        description: data.desc,
        image: data.image,
        creator: {
            "@type": "Person",
            name: "Khusni Ridho"
        },
        about: {
            "@type": "Thing",
            name: data.detail.category
        }
    };

    return (
        <>
            <Script id="ld-breadcrumb" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(breadcrumbSchema)}
            </Script>
            <Script id="ld-project" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(projectSchema)}
            </Script>
            <div className="fixed top-0 left-0 w-screen py-4 z-10 backdrop-filter backdrop-blur-xl bg-[var(--body-50)]">
                <div className="global-container flex flex-col lg:flex-row items-center justify-between gap-y-6 mx-auto">
                    <div className="flex-items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6 self-end lg:self-center lg:order-2">
                        <div className="flex-items-center gap-1">
                            <span className="text-xl font-semibold inline-block">[</span>
                            <span className="text-xs font-semibold inline-block capitalize mt-1">ESC</span>
                            <span className="text-xl font-semibold inline-block">]</span>
                        </div>
                        <Backwork />
                    </div>
                    <h1 className="text-lg font-semibold flex lg:order-1 self-start lg:self-center">
                        <span className="capitalize hidden lg:inline-block">My works</span>
                        <span className="mx-3 hidden lg:inline-block">|</span>
                        <span className="capitalize inline-block">
                            {data.detail.category}
                        </span>
                    </h1>
                </div>
            </div>

            <div className="content mt-38 lg:mt-28">
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-10">
                    <div className="col-span-12 lg:col-span-1 flex lg:flex-col justify-around lg:justify-start flex-items-center gap-6">
                        {dataContact.map((contact, i) => (
                            <Link href={contact.link} target="_blank" key={i} className="flex flex-col flex-items-center gap-2 lg:py-3" rel="noopener noreferrer" draggable={false}>
                                <ImageServer src={contact.image} width={48} height={48} alt={`${contact.name} icon`} className="w-auto h-10" loading="lazy" />
                                <span className="text-sm ">{contact.name}</span>
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
                            {data.detail.stack.map((stack, i: number) => (
                                <div className="flex h-fit gap-2 flex-items-center rounded-full border-primary py-2 px-2" key={i}>
                                    <span className="relative">
                                        <ImageServer src={stack.image} width={32} height={32} alt="technology" className="w-auto h-5" loading="lazy" />
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
                    <ImageServer src={data.image} alt={data.name} width={1024} height={768} priority />
                    {data.detail.images.map((image: string, i: number) => (
                        <ImageServer src={image} alt={data.name} width={1024} height={768} loading="lazy" key={i} />
                    ))}
                </Carousel>
            </div>
        </>
    )
}

const NextArrow = React.memo(() => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 py-3 px-4 -translate-y-2">
        <ArrowRight color="var(--color-white)" size={20} />
    </div>
});

NextArrow.displayName = 'NextArrow';

const PrevArrow = React.memo(() => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 py-3 px-4 -translate-y-2">
        <ArrowLeft color="var(--color-white)" size={20} />
    </div>
});

PrevArrow.displayName = 'PrevArrow';

export default ProjectDetail;