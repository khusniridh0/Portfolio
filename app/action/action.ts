'use server'

import * as z from "zod";
import { smtp } from "../utils/api";
import { getErrors } from "../utils/errors";

const contactSchema = z.object({
    name: z.string().min(3, { message: 'Nama minimal 3 karakter.' }),
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
        const { name, email, message } = data;
        const payload = {
            to: process.env.EMAIL_RECIPIENT,
            subject: `Pesan dari ${name} - ${email} | Website Portfolio Personal`,
            text: message,
        }
        const response = await smtp.post('/send-email', payload);
        const isSuccess = response.status === 200 && /OK/i.test(response.data?.message || '');

        if (!isSuccess) return { success: true, message: 'Pesan sedang dalam perjalanan, mungkin mengalami sedikit keterlambatan. Jika Anda tidak menerima balasan dalam 28 jam, mohon hubungi kami kembali melalui saluran lain. 🙏', errors: {} }
        return { success: true, message: 'Terimakasih, pesan anda telah terkirim.', errors: {} }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Opps, terjadi kesalahan. Silahkan coba lagi nanti.', errors: {} };
    }
}