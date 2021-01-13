// Libs
import React from 'react';

// Utils
import useServiceWorker from '../src/static/js/utils/hooks/useServiceWorker';

// Resources
import '../src/styles/all.scss';

// Components
import SiteMeta from '../src/components/Site/SiteMeta/SiteMeta';

// Interface
interface IProps {
    Component: any,
    pageProps: any
}

// Component
const App = ({ Component, pageProps }: IProps) => {
    useServiceWorker();

    return <>
        <SiteMeta />

        <main>
            <Component {...pageProps} />
        </main>
    </>
};

// Props
App.defaultProps = {};

export default App;
