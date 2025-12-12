import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
    const apiKey = req.headers.get("x-api-key");
    const validate = apiKey !== process.env.API_KEY
    return validate ? new NextResponse("Forbidden", { status: 403 }) : NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}