// Libs
import { useEffect } from 'react';

// Utils
import registerServiceWorker from '../registerServiceWorker';

// Helpers

// Component
const useServiceWorker = (): null => {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') { return; }

        registerServiceWorker();
    }, []);

    return null;
};

export default useServiceWorker;
