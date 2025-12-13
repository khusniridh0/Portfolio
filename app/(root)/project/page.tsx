export const dynamic = "force-dynamic";
import { getProjects } from "@/app/actions/project";
import ErrorNotFound from "@/app/components/error-404";
import Footer from "@/app/components/Footer";
import { HeaderII } from "@/app/components/header";
import { ExternalLink } from "@/app/components/icons";
import ImageSkeleton from "@/app/components/image";
import { dataContact } from "@/app/services/main";
import Link from "next/link";

interface Works {
    slug: string;
    name: string;
    image: string;
    desc: string;
}

const Project = async () => {
    const response = await getProjects()
    const { data, status } = response as { data: Works[], status: string }
    if (status == 'error') return <ErrorNotFound />

    return (
        <>
            <HeaderII />

            <section className="grid grid-cols-12 pt-20">
                <div className="col-span-1 hidden lg:block relative">
                    <div className="sticky top-0 flex lg:flex-col justify-center items-center gap-10 h-screen">
                        <div className="horizon w-px h-full" />
                        <div className="-rotate-90 absolute bg-[var(--body)] w-90 py-2 px-6 uppercase">
                            web development & design ui/ux
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-10">
                    <div className="mb-20">
                        <div className="section-title relative flex justify-center items-center mb-16">
                            <h1 className="text-7xl lg:text-[150px] xl:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">Works</h1>
                            <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Experience</h1>
                        </div>
                        <p className="text-lg lg:text-2xl text-center max-w-3xl mx-auto">Arsitek digital ahli dalam membangun UI interaktif, didukung keahlian di bidang Full Stack Web Development, Desain UI/UX, dan Software Testing.</p>
                    </div>

                    <div className="grid grid-cols-6 lg:grid-cols-7 gap-x-7 gap-y-8 lg:gap-y-0">
                        {data.map((item: Works, i: number) => (
                            (i % 4 === 0) || (i % 4 === 3) ? (
                                <div className="lg:p-6 col-span-6 md:col-span-3 lg:col-span-4" key={i}>
                                    <div className="w-full h-auto aspect-[4/3] rounded-lg overflow-hidden">
                                        <ImageSkeleton src={item.image} alt={item.name} width={671} height={503} className="w-auto h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="px-2">
                                        <Link href={`/project/${item.slug}`} className="inline-block text-2xl font-bold mt-3 lg:mt-7 mb-4" rel="preload">
                                            {item.name}
                                            <sup className="inline-block ml-2"><ExternalLink color="var(--text-content)" size={16} /></sup>
                                        </Link>
                                        <p>{item.desc.slice(0, 170)}...</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="lg:p-6 col-span-6 md:col-span-3 lg:col-span-3" key={i}>
                                    <div className="w-full h-auto aspect-[4/3] rounded-lg overflow-hidden">
                                        <ImageSkeleton src={item.image} alt={item.name} width={484} height={363} className="w-auto h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="px-2">
                                        <Link href={`/project/${item.slug}`} className="inline-block text-2xl font-bold mt-3 lg:mt-7 mb-4" rel="preload">
                                            {item.name}
                                            <sup className="inline-block ml-2"><ExternalLink color="var(--text-content)" size={16} /></sup>
                                        </Link>
                                        <p>{item.desc.slice(0, 170)}...</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                <div className="col-span-1 hidden lg:block relative">
                    <div className="sticky top-0 flex lg:flex-col justify-center items-center gap-10 h-screen">
                        <div className="horizon w-px h-full" />
                        <div className="absolute flex -rotate-90">
                            {dataContact.map((contact, i) => (
                                <Link href={contact.link} target="_blank" className="bg-[var(--body)] py-2 px-6 uppercase" key={i} rel="preload">
                                    {contact.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Project;