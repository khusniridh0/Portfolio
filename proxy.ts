import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
    const apiKey = req.headers.get("x-api-key");
    const expectedKey = process.env.API_KEY
    const validate = apiKey !== expectedKey

    if (!expectedKey) {
        return new NextResponse("Server configuration error", { status: 500 });
    }

    if (apiKey && apiKey === expectedKey) {
        return NextResponse.next();
    }

    return new NextResponse("Forbidden", { status: 403 });
    // return validate ? new NextResponse("Forbidden", { status: 403 }) : NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}