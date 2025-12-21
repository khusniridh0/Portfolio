import { getProjects } from "@/actions/project";
import { ContactForm, ContactList, ContactMe } from "@/components/contact";
import Footer from "@/components/Footer";
import { HeaderI } from "@/components/header";
import Avatar from "@/components/hero";
import { ArrowLeft, ArrowRight, Github, Instagram, LinkedIn, WhatsApp } from "@/components/icons";
import ImageServer from "@/components/image-server";
import { ActiveTap } from "@/components/skill";
import { Tap1, Tap2, Tap3 } from "@/components/tabs";
import { ActiveWorks, SliderWork } from "@/components/works";
import { dataContact, dataStack, dataWorks } from "@/services/main";
import type { CarouselConfig, Works } from '@/types';
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";

const dataBrand = [
    {
        icon: <LinkedIn color="var(--text-content)" size={30} />,
        name: 'LinkedIn',
        link: 'http://linkedin.com/in/khusni-ridho'
    },
    {
        icon: <Github color="var(--text-content)" size={30} />,
        name: 'Github',
        link: 'https://khusniridh0.github.io/creator/'
    },
    {
        icon: <Instagram color="var(--text-content)" size={30} />,
        name: 'Instagram',
        link: 'https://www.instagram.com/_async.await/'
    },
    {
        icon: <WhatsApp color="var(--text-content)" size={30} />,
        name: 'WhatsApp',
        link: 'https://wa.me/6282399180746?text=Halo%20Khusni%20Ridho%2C%0ASaya%20telah%20melihat%20web%20portofolio%20kamu%20dan%20kemampuan%20yang%20kamu%20miliki.%20Saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20kerja%20sama%20atau%20proyek%20yang%20bisa%20kita%20kerjakan%20bersama.%0AApakah%20kamu%20ada%20waktu%20untuk%20berdiskusi%20lebih%20lanjut%3F'
    }
]

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khusni Ridho",
    url: process.env.SITE_URL,
    jobTitle: "Full Stack Developer & UI/UX Designer",
    description: "Full Stack Developer & UI/UX Malang. Membangun solusi digital yang mengedepankan performa, estetika dan maintainable untuk bisnis anda.",
    image: `${process.env.SITE_URL}/picture/og-image.png`,
    sameAs: [...dataBrand.slice(0, -1).map((item) => item.link)],
    knowsAbout: [...dataStack.map((item) => item.name)],
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "Professional",
            url: `${process.env.SITE_URL}/#contact`,
            availableLanguage: ["Indonesian", "English"]
        }
    ]
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Khusni Ridho Portfolio",
    url: process.env.SITE_URL,
    author: {
        "@type": "Person",
        name: "Khusni Ridho"
    }
};

const getCarouselConfig = (): CarouselConfig => ({
        gap: 20,
        drag: false,
        responsive: [
            {
                breakpoint: 1280,
                perview: 3
            },
            {
                breakpoint: 767,
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
                x: 'center',
                y: 'bottom'
            }
        }
});

const getTabs = () => [
        { title: 'Tech Stack', component: <Tap1 />, key: 'tap1' },
        { title: 'Learning', component: <Tap2 />, key: 'tap2' },
        { title: 'Certificate', component: <Tap3 />, key: 'tap3' },
];

const Home = async () => {
    const response = await getProjects({ start: 0, end: 9 })
    const { data, status } = response as { data: Works[], status: string }
    if (status == 'error') return notFound()
    const activeWorks = data?.slice(0, 3)
    const otherWorks = data?.slice(3)
    const carouselConfig = getCarouselConfig()
    const tabs = getTabs()

    return (
        <>
            <Script id="ld-person" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(jsonLd)}
            </Script>
            <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(websiteSchema)}
            </Script>
            <HeaderI />

            <section id="hero" className="hero-inline grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
                <div className="avatar flex justify-center lg:justify-end lg:order-2">
                    <Avatar />
                </div>
                <div className="description ">
                    <div className="flex gap-x-8 gap-y-4 flex-col lg:flex-row items-center mb-8 lg:mb-4">
                        <span className="color-gradient font-semibold text-2xl uppercase">Hey there</span>
                        <span className="text-sm  font-semibold py-3 px-6 border border-primary rounded-full capitalize flex items-center gap-4">
                            <div className="dot-animated rounded-full dark:bg-green-900"></div>
                            available for new opportunities
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-bold mb-2 lg:mb-6 w-fit uppercase">Khusni Ridho</h1>
                    <p className="text-md lg:text-xl mb-8">Software Developer fokus pada UI/UX, Full-Stack Web Development, dan Software Testing.</p>
                    <div className="flex items-center gap-10">
                        <Link href="/about" className="w-fit btn rounded-full border-gradient">
                            <span className="me-4">Read-Me</span>
                            <ArrowRight color="var(--text-content)" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="brand" className="py-18 lg:p-0">
                <div id="brand" className="flex flex-wrap justify-around lg:justify-between items-center gap-x-22 gap-y-8 lg:gap-4 lg:flex-nowrap lg:flex-row">
                    {dataBrand.map((item, i) => (
                        <Link href={item.link} target="_blank" className="flex gap-x-2 justify-center items-center" key={i} rel="noopener noreferrer">
                            <span className="lg:inline-block">{item.icon}</span>
                            <span className=" md:text-2xl">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section id="about" className="pt-40 relative">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[150px] xl:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">About</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">introduction</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="profile sticky top-0 md:top-30  bg-[var(--body)] h-fit">
                        <ImageServer src="/picture/profile.png" alt="Khusni Ridho" width={640} height={837} className="w-full grayscale mix-blend-plus-darker dark:mix-blend-difference" priority />
                    </div>
                    <div className="description lg:pt-[10px] pl-1 ">
                        <div className="pb-8 mb-8 about-point">
                            <p className="text-xl">Saya menciptakan solusi digital yang mendorong bisnis Anda maju. Mulai dari merancang antarmuka (interface) yang bersih dan intuitif, menghubungkannya dengan logika back-end yang kuat, hingga menguji fungsionalitas sistem secara menyeluruh, fokus saya adalah membangun sistem digital yang tidak hanya berfungsi, tetapi juga bernilai.</p>
                        </div>
                        <div className="pb-8 mb-8 about-point">
                            <h2 className="text-xl font-semibold mb-8">[ 01 ] Design UI/UX</h2>
                            <p className="text-xl">Ketertarikan saya pada dunia UI/UX didasari oleh rasa ingin tahu mengapa beberapa antarmuka terasa lebih mudah dipahami dibandingkan yang lain. Saya menuangkan ide dengan empati, menyusun tata letak dengan logika, dan membangun dengan presisi. Tujuan utama saya adalah menciptakan pengalaman pengguna (User Experience) yang terasa alami, intuitif, dan secara visual.</p>
                        </div>
                        <div className="pb-8 mb-8 about-point">
                            <h2 className="text-xl font-semibold mb-8">[ 02 ] Full-Stack Developer</h2>
                            <p className="text-xl">Seiring eksplorasi saya lebih dalam, saya menyadari bahwa saya tidak hanya ingin mendesain, saya juga ingin memahami apa yang menggerakkannya. Jadi, saya mendalami pengembangan full-stack, mempelajari bagaimana data mengalir, bagaimana server merespons, dan bagaimana menghubungkan antara front-end dan back-end. Saya senang membangun sistem yang tidak hanya fungsional, tetapi juga skalabel dan mudah dipelihara.</p>
                        </div>
                        <div className="pb-8 mb-8 about-point">
                            <h2 className="text-xl font-semibold mb-8">[ 03 ] Software Testing</h2>
                            <p className="text-xl">Sebelum sebuah produk diluncurkan, memastikan semua fitur berfungsi sesuai harapan adalah peran krusial. Saya terlibat dalam Software Testing untuk menjamin setiap fungsionalitas bekerja dengan baik dan tidak terjadi bug dalam penggunaan normal. Bagi saya, pengujian adalah tentang kejelasan, konsistensi, dan menemukan masalah kecil sebelum sampai ke tangan pengguna.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skill" className="lg:pt-40">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[150px] xl:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">mastery</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Journey & Learning</h1>
                </div>
                <ActiveTap tabs={tabs} />
            </section>

            <section id="works" className="pt-40">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[150px] xl:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">works</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Experience</h1>
                </div>
                <div className="benner">
                    <ActiveWorks dataWorks={activeWorks} />
                    <SliderWork dataWorks={otherWorks} config={carouselConfig as CarouselConfig} />
                </div>
            </section>

            <section id="cta" className="py-40">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[150px] xl:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">links</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Let&lsquo;s Make a Change</h1>
                </div>

                <div className="cta-branding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
                        <div className="flex justify-between items-center mb-3">
                            <ImageServer src="/icon/worker.webp" width={51} height={50} alt="worker" loading="lazy" />
                            <h2 className="text-3xl font-bold">{dataWorks.length}</h2>
                        </div>
                        <h3 className="text-lg font-semibold">Project</h3>
                        <p className="text-sm ">Portofolio proyek full-stack dan desain. Pengalaman praktik nyata dari ide hingga peluncuran.</p>
                    </div>
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
                        <div className="flex justify-between items-center mb-3">
                            <ImageServer src="/icon/technology.webp" width={51} height={50} alt="technology" loading="lazy" />
                            <h2 className="text-3xl font-bold">{dataStack.length}</h2>
                        </div>
                        <h3 className="text-lg font-semibold">Tech Stack</h3>
                        <p className="text-sm ">Kemampuan dalam berbagai teknologi & framework utama. Siap menyesuaikan dengan kebutuhan tim Anda.</p>
                    </div>
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1">
                        <div className="flex justify-between items-center mb-3">
                            <ImageServer src="/icon/certificate.webp" width={51} height={50} alt="certificate" loading="lazy" />
                            <h2 className="text-3xl font-bold">{dataWorks.length}</h2>
                        </div>
                        <h3 className="text-lg font-semibold">Certificate</h3>
                        <p className="text-sm ">Validasi kompetensi profesional dan keahlian teruji. Komitmen pada pembelajaran berkelanjutan.</p>
                    </div>
                </div>

                <div className="cta-content relative overflow-hidden rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1">
                    <div className="lg:w-150 py-4 lg:py-[12px] lg:px-[12px] text-center lg:text-left">
                        <h1 className="text-4xl lg:text-[48px] md:w-120 lg:w-full  font-medium uppercase mx-auto mb-4">Let&lsquo;s What are you waiting for?</h1>
                        <h2 className="text-xl mb-8">Diskusikan proyek Anda sekarang, mari berkolaborasi dan ciptakan inovasi bersama!</h2>
                        <div className="flex justify-center lg:justify-start">
                            <ContactMe />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="marquee flex py-30">
                    <div className="marquee-content flex gap-10 pr-10">
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                    </div>
                    <div className="marquee-content flex gap-10 pr-10">
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                        <h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
                    </div>
                </div>

                <div className="section-title text-center mb-20">
                    <h1 className="relative text-2xl lg:text-6xl  uppercase mb-4">Get in Touch with Us</h1>
                    <p>Silakan isi formulir di bawah ini, atau Anda dapat menghubungi saya melalui media sosial maupun email.</p>
                </div>

                <div className="grid grid-cols-6 md:grid-cols-12 gap-10">
                    <div className="md:form col-span-6 md:col-span-7 order-2 md:order-1">
                        <ContactForm />
                    </div>
                    <div className="contact-card col-span-6 md:col-span-5 order-1 md:order-2">
                        <div className="font-semibold mb-1">Contact Details</div>
                        <ContactList dataContact={dataContact} />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
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

export default Home;