import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import { AllContext } from "../contexts/all-context";
import LandingLayout from "../layout/landing-layout";
import { Arrowleft, ArrowRight, Close } from "../utils/icons";

const dataContact = [
    {
        image: 'icon/whatsapp.svg',
        name: 'Email',
        link: 'mail.khusniridho@gmail.com',
    },
    {
        image: 'icon/instagram.svg',
        name: 'Instagram',
        link: 'https://www.instagram.com/_async.await/',
    },
    {
        image: 'icon/linkedin.svg',
        name: 'LinkedIn',
        link: 'http://linkedin.com/in/khusni-ridho',
    }
]

const NextArrow = ({ onClick }) => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 p-3 z-10 absolute top-[-50px] right-0" onClick={onClick}>
        <ArrowRight color="var(--color-white)" size={16} />
    </div>
}

const PrevArrow = ({ onClick }) => {
    return <div className="bg-[var(--primary)] text-sm font-semibold rounded-1 p-3 z-10 absolute top-[-50px] right-12" onClick={onClick}>
        <Arrowleft color="var(--color-white)" size={16} />
    </div>
}

const Project = () => {
    const navigate = useNavigate();
    const { setSection, reread } = useContext(AllContext);
    const settings = {
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        slidesToScroll: 1,
        initialSlide: 2,
        cssEase: "linear",
        slidesToShow: 2,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    }

    const closeProject = () => { setSection('works'); navigate("/") }

    useEffect(() => { !reread && closeProject() }, [reread])

    return (
        <LandingLayout>
            <header className="sticky top-0 flex items-center justify-between py-8">
                <h1 className="text-lg font-semibold flex">
                    <span className="capitalize block">My works</span>
                    <span className="mx-3">|</span>
                    <span className="capitalize block">{reread?.detail.category}</span>
                </h1>
                <div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
                    <span className="text-sm font-semibold capitalize">Back</span>
                    <button type="button" className="border-primary h-10 w-10 flex items-center justify-center rounded-full" onClick={closeProject}>
                        <Close color="var(--text-content)" width={20} height={20} />
                    </button>
                </div>
            </header>

            <div className="content">
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-10">
                    <div className="col-span-12 lg:col-span-1 flex lg:flex-col justify-around lg:justify-start items-center gap-6">
                        {dataContact.map((contact, i) => (
                            <div key={i} className="flex items-center gap-3 lg:py-3">
                                <img src={contact.image} alt="" className="w-10 h-10" />
                            </div>
                        ))}
                    </div>
                    <div className="horizon w-full h-px my-4 col-span-12 lg:hidden" />
                    <div className="col-span-12 lg:col-span-7">
                        <h1 className="text-2xl font-bold w-fit capitalize">
                            {reread?.name}
                            <div className="horizon w-full h-px my-4" />
                        </h1>
                        <p>{reread?.desc}</p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <h1 className="text-2xl font-bold w-fit">
                            Stack Tech
                            <div className="horizon w-full h-px my-4" />
                        </h1>
                        <div className="flex flex-wrap justify-start items-start gap-6">
                            {reread?.detail.stack.map((stack, i) => (
                                <div className="flex h-fit gap-2 items-center rounded-full border-primary py-2 px-4" key={i}>
                                    <span className="relative">
                                        <span className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full bg-[var(--primary-50)] rounded-full blur-lg -z-10" />
                                        <img src={stack.image} alt="technology" className="w-6 h-6" loading="lazy" />
                                    </span>
                                    <span className="text-sm mr-6">{stack.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-20">
                <Slider {...settings}>
                    {reread?.detail.images.map((image, i) => (
                        <><img className="px-4" src={image} alt="" key={i} /></>
                    ))}
                </Slider>
            </div>
        </LandingLayout >
    );
}

export default Project;