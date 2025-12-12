'use server'

import { request } from "@/app/utils/api";
import { getErrors } from "@/app/utils/errors";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string()
        .min(3, { message: 'Nama minimal 3 karakter.' }),
    email: z.email('Email tidak valid.')
        .min(5, { message: 'Email minimal 5 karakter.' })
        .refine((val) => val.endsWith('@gmail.com'), {
            message: 'Hanya menerima dari Gmail.'
        }),
    message: z.string()
        .min(10, { message: "Pesan minimal 10 karakter." })
        .max(1000, { message: "Pesan maksimal 1000 karakter." })
        .transform((val) => val.trim().replace(/\s\s+/g, ' '))
})

type ContactData = z.infer<typeof contactSchema>;

export type formState = {
    success: boolean;
    message: string;
    errors: Record<string, { error: string }> | null;
    formInput?: ContactData
}

export const formContact = async (_prevState: formState, formData: FormData): Promise<formState> => {
    const formInput = Object.fromEntries(formData);
    const { data, success, error } = contactSchema.safeParse(formInput);
    if (!success) {
        const errors = await getErrors(error.issues);
        return {
            success: false,
            message: 'Pesan tidak terkirim, periksa kembali form anda.',
            formInput: formInput as ContactData,
            errors,
        }
    }

    try {
        const response = await request.post('/contact', data);
        const { data: { status } } = response;
        if (status != 'success') return { success: false, message: 'Pesan tidak terkirim, terjadi kesalahan sistem. Mohon hubungi kami kembali melalui saluran lain. 🙏', errors: {} }
        return { success: true, message: 'Terimakasih, pesan anda telah terkirim.', errors: {} }
    } catch {
        return { success: false, message: 'Pesan tidak terkirim, terjadi kesalahan sistem. Mohon hubungi kami kembali melalui saluran lain. 🙏', errors: {} }
    }
}