'server only';

import axios from "axios";

export const smtp = axios.create({
    baseURL: process.env.NEXT_PRIVATE_SMTP,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});