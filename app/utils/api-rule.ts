'server only';

import { Redis } from "@upstash/redis";
import { NextRequest } from "next/server";

export type ResponseStatus = 'success' | 'error';
export interface ApiResponse<T = []> {
    code: number;
    status: ResponseStatus;
    message: string;
    data: T | null;
}

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export function createResponse<T = []>({ code = 500, message = '', data = null, }: { code?: number; message?: string; data?: T | null; }): ApiResponse<T> {
    const status: ResponseStatus = code < 400 ? 'success' : 'error';
    return { code, status, message, data };
}

export async function rateLimit(ip: string) {
    const perMinuteKey = `rl:minute:${ip}`;
    const dailyKey = `rl:daily`;
    const requestsPerMinute = await redis.incr(perMinuteKey);
    const requestsPerDay = await redis.incr(dailyKey);

    if (requestsPerMinute === 1) {
        await redis.expire(perMinuteKey, 60);
    }

    if (requestsPerMinute > 3) {
        return { allowed: false, message: 'Too many requests per minute' };
    }

    if (requestsPerDay === 1) {
        await redis.expire(dailyKey, 86400);
    }

    if (requestsPerDay > 100) {
        return { allowed: false, message: 'Global daily limit reached' };
    }

    return { allowed: true };
}

export function getIp(req: NextRequest): string {
    const headers = req.headers;

    const xForwardedFor = headers.get('x-forwarded-for');
    if (xForwardedFor) {
        const ips = xForwardedFor.split(',').map(ip => ip.trim());
        if (ips[0]) return ips[0];
    }

    const xRealIp = headers.get('x-real-ip');
    if (xRealIp) return xRealIp;

    const cfConnectingIp = headers.get('cf-connecting-ip');
    if (cfConnectingIp) return cfConnectingIp;

    const fastlyClientIp = headers.get('fastly-client-ip');
    if (fastlyClientIp) return fastlyClientIp;

    const trueClientIp = headers.get('true-client-ip');
    if (trueClientIp) return trueClientIp;

    return 'unknown';
}