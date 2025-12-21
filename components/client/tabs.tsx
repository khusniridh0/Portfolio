'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dataCertificate, dataLearning, dataStack } from "@/services/main";
import Link from "next/link";

const StackMobile = React.memo(() => {
    return (
        <div className="flex flex-wrap gap-3 mb-4 flex-center-center mx-auto">
            {dataStack.map((item, i) => (
                <div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex-col-center-center shadow-primary duration-200" key={i}>
                    <Image src={`${item.image}`} alt="Stack Brand" width={48} height={36} className="mb-4 aspect-[4/3]" loading="lazy" draggable={false}/>
                    <span className=" font-semibold text-center text-sm">{item.name}</span>
                </div>
            ))}
        </div>
    );
});

StackMobile.displayName = 'StackMobile';

const StackDesktop = React.memo(() => {
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

    return (
        <>
            {createPiramid(newRows, dataStack).map((items, i) => (
                <div className="flex flex-wrap gap-4 mb-4 flex-center-center mx-auto" key={i}>
                    {items.map((item, i) => {
                        return (
                            <div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex-col-center-center shadow-primary duration-200" key={i}>
                                <Image src={`${item.image}`} alt="Stack Brand" width={48} height={36} className="mb-4 aspect-[4/3]" loading="lazy" draggable={false} />
                                <span className=" font-semibold text-center text-sm">{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            ))}
        </>
    );
});

StackDesktop.displayName = 'StackDesktop';

export const Tap1 = React.memo(() => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const updateState = () => {
            setIsDesktop(window.innerWidth >= 1280); // xl breakpoint
        };

        updateState();
        window.addEventListener('resize', updateState);

        return () => {
            window.removeEventListener('resize', updateState);
        };
    }, []);

    return (
        <>
            {!isDesktop && <StackMobile />}
            {isDesktop && <StackDesktop />}
        </>
    );
});

Tap1.displayName = 'Tap1';

export const Tap2 = React.memo(() => {
    return <div className="">
        {dataLearning.map((item, i) => (
            <div key={i}>
                <div className="flex gap-6 lg:gap-20 justify">
                    <h3 className="text-xl min-w-fit">[ {i + 1} ]</h3>
                    <Image src={item.image} alt={item.name} width={352} height={246} className="hidden lg:block aspect-[1.43/1] object-cover w-88 rounded-1" loading="lazy" draggable={false} />
                    <div className="">
                        <h3 className="text-2xl lg:text-4xl font-bold mb-4">{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
                {i != dataLearning.length - 1 && <div className="horizon w-full h-px my-8" />}
            </div>
        ))}
    </div>
});

Tap2.displayName = 'Tap2';

export const Tap3 = React.memo(() => {
    return <div className="flex flex-wrap gap-4 mb-4 flex-center-center mx-auto">
        {dataCertificate.map((item, i) => (
            <Link href={item.link} target="_blank" className="smooth hover:border-gradient rounded-1 p-2 lg:w-90 md:w-78 flex-col-center-center shadow-primary duration-200" key={i} rel="noopener noreferrer" draggable={false}>
                <Image src={item.image} alt="Certificate" width={344} height={243} className="aspect-[1.43/1]" loading="lazy" draggable={false} />
            </Link>
        ))}
    </div>
});

Tap3.displayName = 'Tap3';

