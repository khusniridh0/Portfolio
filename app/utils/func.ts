const events = (element: HTMLElement, event: string, callback: EventListener) => {
    element.addEventListener(event, callback);
};

const removeEvents = (element: HTMLElement, event: string, callback: EventListener) => {
    element.removeEventListener(event, callback);
}

const createSelector = (arg: string | Element) => {
    const element = typeof arg === 'string' ? document.querySelector(arg) : arg;

    // Kembali ke objek yang memiliki metode `event`
    return {
        target: element,
        event: (event: string, callback: EventListener) => {
            if (element) {
                events(element as HTMLElement, event, callback);
            }
        },
        removeEvent: (event: string, callback: EventListener) => {
            if (element) {
                removeEvents(element as HTMLElement, event, callback);
            }
        }
    };
};

export const select = Object.assign(
    createSelector,
    {
        all: (selector: string) => {
            const elements = Array.from(document.querySelectorAll(selector)) || [];
            return elements.map(el => createSelector(el));
        },
        first: (selector: string) => createSelector(selector),
        last: (selector: string) => createSelector(selector),
        find: (selector: string) => createSelector(selector),
    }
);
