export const throttle = <Args extends unknown[]>(
    func: (...args: Args) => void,
    limit: number
): ((...args: Args) => void) => {
    let inThrottle: boolean;
    return function (...args: Args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export const debounce = <Args extends unknown[]>(
    func: (...args: Args) => void,
    wait: number
): ((...args: Args) => void) => {
    let timeout: ReturnType<typeof setTimeout> | null;
    return function (...args: Args) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func(...args);
        }, wait);
    };
};
