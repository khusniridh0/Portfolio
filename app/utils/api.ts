'server only';

import axios from "axios";

export const smtp = axios.create({
    baseURL: process.env.EMAIL_SMTP,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const request = axios.create({
    baseURL: `${process.env.SITE_URL}/api/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});