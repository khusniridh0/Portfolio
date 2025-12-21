'server-only'

import type { Method, RequestOptions, SmtpError } from '@/types';

const API_BASE = `${process.env.SITE_URL}/api`;
const SMTP_BASE = process.env.EMAIL_SMTP!;

function buildUrl(path: string, params?: RequestOptions['params']) {
    const url = new URL(`${API_BASE}/${path}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                url.searchParams.append(key, String(value));
            }
        });
    }

    return url.toString();
}

async function coreRequest<T>(method: Method, path: string, options: RequestOptions = {}): Promise<{ data: T }> {
    const url = buildUrl(path, options.params);

    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.API_KEY!,
            ...options.headers,
        },
        body:
            method === 'GET' || method === 'DELETE'
                ? undefined
                : JSON.stringify(options.body),
        cache: options.cache,
        next:
            options.revalidate !== undefined
                ? { revalidate: options.revalidate }
                : undefined,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(
            `API ${method} ${path} failed: ${res.status} ${text}`
        );
    }

    return await res.json();
}

export async function smtp<TResponse>(path: string, payload: unknown): Promise<TResponse> {
    const res = await fetch(`${SMTP_BASE}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
    });

    if (!res.ok) {
        let message = 'SMTP request failed';

        try {
            const data = await res.json();
            message = data?.message ?? message;
        } catch {
            message = await res.text();
        }

        throw {
            status: res.status,
            message,
        } satisfies SmtpError;
    }

    return res.json();
}

export const request = {
    get<T>(path: string, options?: RequestOptions) {
        return coreRequest<T>('GET', path, options);
    },

    post<T>(path: string, body?: unknown, options?: RequestOptions) {
        return coreRequest<T>('POST', path, {
            ...options,
            body,
        });
    },

    put<T>(path: string, body?: unknown, options?: RequestOptions) {
        return coreRequest<T>('PUT', path, {
            ...options,
            body,
        });
    },

    delete<T>(path: string, options?: RequestOptions) {
        return coreRequest<T>('DELETE', path, options);
    },
};