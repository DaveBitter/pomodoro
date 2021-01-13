// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
const onRegistrationSuccess = (registration: ServiceWorkerRegistration): void => {
    const swRegistration = { ...registration };

    swRegistration.onupdatefound = (): void => {
        const installingWorker = registration.installing;

        if (!installingWorker) {
            return;
        }

        installingWorker.onstatechange = (): void => {
            if (installingWorker.state === 'installed') {
                console.info(
                    navigator.serviceWorker.controller
                        ? 'New content is available; please refresh.'
                        : 'Content is cached for offline use.'
                );
            }
        };
    };
};

const onRegistrationFail = (error: string): void => console.error('Error during service worker registration:', error);

const register = (): void => {
    const swUrl = '/sw.js';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(swUrl).then(onRegistrationSuccess).catch(onRegistrationFail);
    }
};

const unregister = (): void => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => registration.unregister());
    }
};

export default register;
export { unregister };
