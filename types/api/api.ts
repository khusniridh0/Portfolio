// API-related types


export interface SmtpError {
    status: number;
    message: string;
}

export type RequestOptions = {
    params?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    headers?: HeadersInit;
    revalidate?: number;
    cache?: RequestCache;
};
