import type { ResponseStatus } from '../primitives/enums';

export interface ApiResponse<T = []> {
    code: number;
    status: ResponseStatus;
    message: string;
    data: T | null;
}
