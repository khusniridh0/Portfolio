// Contact domain types

export interface ContactResponse {
    status: 'success' | 'error';
}

export interface ContactSmtpResponse {
    message: string;
}

export interface Contact {
    image: string;
    name: string;
    link: string;
}

export interface ContactData {
    name: string;
    email: string;
    message: string;
}

export interface FormState {
    success: boolean;
    message: string;
    errors: Record<string, { error: string }> | null;
    formInput?: ContactData;
}
