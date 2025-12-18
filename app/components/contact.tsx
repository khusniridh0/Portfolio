'use client'

import { ArrowRight, Copy, SendMessage } from "@/app/components/icons";
import ImageSkeleton from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState, useCallback } from "react";
import { formContact, formState } from "@/app/actions/contact";
import { scrolled } from "@/app/utils/event";

interface Contact {
    image: string
    name: string
    link: string
}

const initialErrors: formState['errors'] = {
    name: { error: '' },
    email: { error: '' },
    message: { error: '' }
};

const initialState = {
    success: false,
    message: '',
    formInput: { name: '', email: '', message: '' },
    errors: initialErrors
};

export const ContactMe = () => {
    return (
        <Link onClick={scrolled} href="/#contact" className="w-fit btn rounded-full border-gradient" rel="preload">
            <span className="me-4">Contact Me</span>
            <ArrowRight color="var(--text-content)" />
        </Link>
    );
}

export const ContactForm = () => {
    const [state, formAction, loading] = useActionState<formState, FormData>(formContact, initialState);
    const { name, email, message } = state.errors || initialState.errors;

    return (
        <form action={formAction}>
            <div className=" w-full flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={state.formInput?.name} className="rounded-1 text-sm border-secondary p-4" required autoComplete="off" />
                {name && <span className="text-[13px] text-red-600 font-medium">{name?.error}</span>}
            </div>
            <div className=" w-full flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" defaultValue={state.formInput?.email} className="rounded-1 text-sm border-secondary p-4" required autoComplete="off" />
                {email && <span className="text-[13px] text-red-600 font-medium">{email?.error}</span>}
            </div>
            <div className=" w-full flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={10} defaultValue={state.formInput?.message} className="rounded-1 text-sm border-secondary p-4" required autoComplete="off" ></textarea>
                {message && <span className="text-[13px] text-red-600 font-medium">{message?.error}</span>}
            </div>
        <button type="submit" className={`flex justify-center items-center text-sm font-semibold rounded-1 p-3 w-full ${loading ? 'bg-[var(--primary-50)]' : 'bg-[var(--primary)]'}`} disabled={loading}>
                <span className="me-2 text-white">{loading ? 'Sending...' : 'Send Message'}</span>
                <SendMessage color="var(--color-white)" />
            </button>

            {(state?.message) && (
                <div
                    className={`text-center mt-4 font-medium flex items-start justify-center gap-2 ${state?.success ? 'text-green-600' : 'text-red-600'}`}
                    aria-live="polite"
                    role="status"
                >
                    <span className={`rounded-full h-8 text-sm flex items-center justify-center aspect-square ${state?.success ? 'bg-green-200' : 'bg-red-200'}`}>{state.success ? '✔️' : '❗'}</span>
                    <span className="inline-block">{state?.message}</span>
                </div>
            )}
        </form>
    )
}

export const ContactList = ({ dataContact }: { dataContact: Contact[] }) => {
    const [copied, setCopied] = useState<number | null>(null)

    const copying = useCallback((e: React.MouseEvent, data: typeof dataContact[number], index: number) => {
        e.preventDefault();
        navigator.clipboard.writeText(data.link).then(() => {
            setCopied(index);
        })
    }, [])

    useEffect(() => {
        if (copied === null) return;
        const timer = setTimeout(() => {
            setCopied(null);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [copied])

    return dataContact.map((item, i) => (
        <div className="rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1 mb-6" key={i}>
            <div className="flex justify-between items-center mb-3">
                <ImageSkeleton src={item.image} width={50} height={50} className="h-10 w-auto" alt="whatsapp" loading="lazy" />
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