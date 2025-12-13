'server-only'

const API_BASE = `${process.env.SITE_URL}/api`;
const SMTP_BASE = process.env.EMAIL_SMTP!;
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type FetchOptions = RequestInit & { revalidate?: number };
type RequestOptions = {
    params?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    headers?: HeadersInit;
    revalidate?: number;
    cache?: RequestCache;
};

async function baseFetch<T>(
    url: string,
    options: FetchOptions = {}
): Promise<T> {
    const res = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        next: {
            revalidate: options.revalidate ?? 300,
        },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(
            `Fetch error ${res.status}: ${text}`
        );
    }

    return res.json();
}



export function smtp<T>(
    path: string,
    body: unknown
) {
    return baseFetch<T>(`${SMTP_BASE}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        cache: 'no-store', // penting!
    });
}








function buildUrl(
    path: string,
    params?: RequestOptions['params']
) {
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

async function coreRequest<T>(
    method: Method,
    path: string,
    options: RequestOptions = {}
): Promise<{ data: T }> {
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

    const data = await res.json();
    return { data };
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











// 'server only';

// import axios from "axios";

// export const smtp = axios.create({
//     baseURL: process.env.EMAIL_SMTP,
//     timeout: 30000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export const request = axios.create({
//     baseURL: `${process.env.SITE_URL}/api/`,
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': process.env.API_KEY
//     },
// });