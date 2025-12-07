'use client'

import { ArrowRight } from "@/app/utils/icons";
import { scrolled } from "../utils/event";
import { Copy } from "@/app/utils/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Contact {
    image: string
    name: string
    link: string
}

export const ContactMe = () => {
    return (
        <Link onClick={scrolled} href="#contact" className="w-fit btn rounded-full border-gradient" rel="preload">
            <span className="me-4">Contact Me</span>
            <ArrowRight color="var(--text-content)" />
        </Link>
    );
}

export const ContactList = ({ dataContact }: { dataContact: Contact[] }) => {
    const [copied, setCopied] = useState<number | null>(null)

    const copying = (e: React.MouseEvent, data: typeof dataContact[number], index: number) => {
        e.preventDefault();
        navigator.clipboard.writeText(data.link).then(() => {
            setCopied(index);
        }).catch(err => console.log('Gagal copy link:', err));
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCopied(null);
        }, 5000)

        return () => {
            clearInterval(timer);
        }
    }, [copied])

    return dataContact.map((item, i) => (
        <div className="rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1 mb-6" key={i}>
            <div className="flex justify-between items-center mb-3">
                <Image src={item.image} width={50} height={50} alt="whatsapp" loading="eager" />
                <button type="button" className={`copy ${copied == i && 'copied'} flex flex-col gap-1 items-center`} onClick={e => copying(e, item, i)}>
                    <Copy color={`${copied == i ? 'var(--color-green-500)' : 'var(--text-content)'}`} />
                    <span className="text-sm">Copy</span>
                </button>
            </div>
            <div className="text-lg font-semibold">{item.name}</div>
            <p className="text-sm">{item.link}</p>
        </div>
    ))
}