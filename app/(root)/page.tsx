import { ChangeTheme, MenuComponent, ToggleMenu } from "@/app/components/header";
import { dataCertificate, dataContact, dataLearning, dataStack, dataWorks } from "@/app/services/main";
import { ArrowLeft, ArrowRight, Github, Instagram, LinkedIn, SendMessage, WhatsApp } from "@/app/utils/icons";
import Image from "next/image";
import { ContactMe } from "../components/contact";
import { ContactList } from "../components/contact";
import { ActiveTap } from "../components/skill";
import { ActiveWorks, SliderWork } from "../components/works";

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

const carouselConfig: CarouselConfig = {
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
};

const Home = () => {
    const navItem = [
        { link: '#hero', text: 'Home' },
        { link: '#about', text: 'About' },
        { link: '#skill', text: 'Skill' },
        { link: '#works', text: 'Project' },
        { link: '#cta', text: 'Contact' }
    ]

    const dataBrand = [
        {
            icon: <LinkedIn color="var(--text-content)" size={30} />,
            name: 'LinkedIn',
            link: 'http://linkedin.com/in/khusni-ridho'
        },
        {
            icon: <Github color="var(--text-content)" size={30} />,
            name: 'Github',
            link: 'https://github.com/khusniridh0'
        },
        {
            icon: <Instagram color="var(--text-content)" size={30} />,
            name: 'Instagram',
            link: 'https://www.instagram.com/_async.await/'
        },
        {
            icon: <WhatsApp color="var(--text-content)" size={30} />,
            name: 'WhatsApp',
            link: 'https://wa.me/6282399180746?text=Halo%20Khusni%20Ridho%2C%0ASaya%20sudah%20melihat%20website%20portofolio%20kamu%20dan%20kemampuan%20yang%20kamu%20miliki.%20Saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20kerja%20sama%20atau%20proyek%20yang%20bisa%20kita%20kerjakan%20bersama.%0AApakah%20kamu%20ada%20waktu%20untuk%20berdiskusi%20lebih%20lanjut%3F'
        }
    ]

    const tabs = [
        { title: 'Tech Stack', component: <Tap1 />, key: 'tap1' },
        { title: 'Learning', component: <Tap2 />, key: 'tap2' },
        { title: 'Certificate', component: <Tap3 />, key: 'tap3' },
    ]

    return (
        <>
            <header id="main-nav" className="flex justify-between items-center sticky top-5">
                <Image src="/logo/logo-91x80.webp" width={76} height={76} alt="Khusni Ridho" className="logo w-auto h-10 lg:h-[64px] max-w-[76px] p-1 lg:p-3 rounded-full" loading="lazy" />
                <MenuComponent items={navItem} />
                <ToggleMenu />

                <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                    <ChangeTheme />
                </div>
            </header>

            <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
                <div className="avatar flex justify-center lg:justify-end lg:order-2">
                    <Image src="/picture/avatar-dark.png" width={610} height={767} alt="Khusni Ridho" className="hidden dark:block" loading="eager" priority />
                    <Image src="/picture/avatar-light.png" width={610} height={767} alt="Khusni Ridho" className="block dark:hidden" loading="eager" priority />
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
                    <ContactMe />
                </div>
            </section>

            <section id="brand" className="py-18 lg:p-0">
                <div id="brand" className="flex flex-wrap justify-around lg:justify-between items-center gap-x-22 gap-y-8 lg:gap-4 lg:flex-nowrap lg:flex-row">
                    {dataBrand.map((item, i) => (
                        <a href={item.link} target="_blank" className="flex gap-x-4 justify-center items-center" key={i} rel="preload">
                            <span className="lg:inline-block">{item.icon}</span>
                            <span className=" md:text-2xl">{item.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section id="about" className="pt-40 relative">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">About</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">introduction</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="profile sticky top-0 md:top-30  bg-[var(--body)] h-fit">
                        <Image src="/picture/profile.png" alt="Khusni Ridho" width={640} height={837} className="w-full grayscale mix-blend-plus-darker dark:mix-blend-difference" loading="lazy" />
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
                    <h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">mastery</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Journey & Learning</h1>
                </div>
                <ActiveTap tabs={tabs} />
            </section>

            <section id="works" className="pt-40">
                <div className="section-title relative flex justify-center items-center">
                    <h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">works</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Experience</h1>
                </div>
                <div className="benner">
                    <ActiveWorks dataWorks={dataWorks} />
                    <SliderWork dataWorks={dataWorks} config={carouselConfig as CarouselConfig} />
                </div>
            </section>

            <section id="cta" className="py-40">
                <div className="section-title relative flex justify-center items-center mb-20">
                    <h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">links</h1>
                    <h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Let&lsquo;s Make a Change</h1>
                </div>

                <div className="cta-branding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
                        <div className="flex justify-between items-center mb-3">
                            <Image src="/icon/worker.webp" width={51} height={50} alt="worker" loading="lazy" />
                            <h2 className="text-3xl font-bold">{dataWorks.length}</h2>
                        </div>
                        <h3 className="text-lg font-semibold">Project</h3>
                        <p className="text-sm ">Portofolio proyek full-stack dan desain. Pengalaman praktik nyata dari ide hingga peluncuran.</p>
                    </div>
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
                        <div className="flex justify-between items-center mb-3">
                            <Image src="/icon/technology.webp" width={51} height={50} alt="technology" loading="lazy" />
                            <h2 className="text-3xl font-bold">{dataStack.length}</h2>
                        </div>
                        <h3 className="text-lg font-semibold">Tech Stack</h3>
                        <p className="text-sm ">Kemampuan dalam berbagai teknologi & framework utama. Siap menyesuaikan dengan kebutuhan tim Anda.</p>
                    </div>
                    <div className="branding-item relative overflow-hidden rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1">
                        <div className="flex justify-between items-center mb-3">
                            <Image src="/icon/certificate.webp" width={51} height={50} alt="certificate" loading="lazy" />
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
                        <form>
                            <div className=" w-full flex flex-col gap-2 mb-4">
                                <label className="text-sm font-medium" htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' />
                            </div>
                            <div className=" w-full flex flex-col gap-2 mb-4">
                                <label className="text-sm font-medium" htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' />
                            </div>
                            <div className=" w-full flex flex-col gap-2 mb-4">
                                <label className="text-sm font-medium" htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={10} className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' ></textarea>
                            </div>
                            <button type="submit" className="flex justify-center items-center bg-[var(--primary)] text-sm font-semibold rounded-1 p-3 w-full">
                                <span className="me-2 text-white">Send Message</span>
                                <SendMessage color="var(--color-white)" />
                            </button>
                        </form>
                    </div>
                    <div className="contact-card col-span-6 md:col-span-5 order-1 md:order-2">
                        <div className="font-semibold mb-1">Contact Details</div>
                        <ContactList dataContact={dataContact} />
                    </div>
                </div>
            </section>

            <footer className="flex flex-wrap justify-between items-center py-6 gap-6 mt-10">
                <div className="horizon w-full h-px" />
                <div className="text-sm font-medium">♥️ 2025 Created By Khusni Ridho</div>
                <div className="text-sm font-medium">Showcase</div>
            </footer>
        </>
    );
}

export default Home;

const Tap1 = () => {
    const newRows = [9, 7, 5, 3, 1]
    const createPiramid = (count: number[], data: typeof dataStack) => {
        const output: typeof dataStack[] = [];
        let index = 0;

        count.forEach(row => {
            output.push(data.slice(index, index + row));
            index += row;
        });

        return output;
    }

    return <>
        <div className="flex flex-wrap gap-3 mb-4 xl:hidden xl:gap-8 xl:mb-8 justify-center item-center mx-auto">
            {dataStack.map((item, i) => (
                <div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex flex-col justify-center items-center shadow-primary duration-200" key={i}>
                    <Image src={`${item.image}`} alt="Stack Brand" width={48} height={36} className="mb-4 aspect-[4/3]" loading="lazy" />
                    <span className=" font-semibold text-center text-sm">{item.name}</span>
                </div>
            ))}
        </div>
        {createPiramid(newRows, dataStack).map((items, i) => (
            <div className="hidden xl:flex flex-wrap gap-4 mb-4 xl:gap-8 xl:mb-8 justify-center item-center mx-auto" key={i}>
                {items.map((item, i) => {
                    return (
                        <div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex flex-col justify-center items-center shadow-primary duration-200" key={i}>
                            <Image src={`${item.image}`} alt="Stack Brand" width={48} height={36} className="mb-4 aspect-[4/3]" loading="lazy" />
                            <span className=" font-semibold text-center text-sm">{item.name}</span>
                        </div>
                    )
                })}
            </div>
        ))}
    </>
}

const Tap2 = () => {
    return <div className="">
        {dataLearning.map((item, i) => (
            <div key={i}>
                <div className="flex gap-6 lg:gap-20 justify">
                    <h3 className="text-xl min-w-fit">[ {i + 1} ]</h3>
                    <Image src={item.image} alt={item.name} width={352} height={246} className="hidden lg:block aspect-[1.43/1] object-cover w-88 rounded-1" loading="lazy" />
                    <div className="">
                        <h3 className="text-2xl lg:text-4xl font-bold mb-4">{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
                {i != dataLearning.length - 1 && <div className="horizon w-full h-px my-8" />}
            </div>
        ))}
    </div>
}

const Tap3 = () => {
    return <div className="flex flex-wrap gap-4 mb-4 justify-center item-center mx-auto">
        {dataCertificate.map((item, i) => (
            <a href={item.link} target="_blank" className="smooth hover:border-gradient rounded-1 p-2 lg:w-90 md:w-78 flex flex-col justify-center items-center shadow-primary duration-200" key={i} rel="preload">
                <Image src={item.image} alt="Certificate" width={344} height={243} className="aspect-[1.43/1]" loading="lazy" />
            </a>
        ))}
    </div>
}