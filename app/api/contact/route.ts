'server only';

import { smtp } from "@/app/utils/api";
import { createResponse, getIp, rateLimit } from "@/app/utils/api-rule";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { allowed } = await rateLimit(getIp(req));
        if (!allowed) return NextResponse.json(createResponse({ code: 429, message: 'Too many requests' }));

        const { name, email, message } = await req.json()
        const payload = {
            to: process.env.EMAIL_RECIPIENT,
            subject: `Pesan dari ${name} - ${email} | Website Portfolio Personal`,
            text: message,
        }

        const response = await smtp.post('/send-email', payload);
        const isSuccess = response.status === 200 && /OK/i.test(response.data?.message || '');
        if (!isSuccess) return NextResponse.json(createResponse({ code: 401, message: 'Failed to send email' }));
        return NextResponse.json(createResponse({ code: 200, message: 'Email sent successfully' }));
    } catch {
        return NextResponse.json(createResponse({ message: 'Internal server error' }));
    }
}