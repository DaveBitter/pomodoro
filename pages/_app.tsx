// Libs
import React from 'react';
import Head from "next/head";

// Utils

// Resources
import '../src/styles/all.scss';

// Components

// Interface
interface IProps {
    Component: any,
    pageProps: any
}

// Component
const App = ({ Component, pageProps }: IProps) => {
    return <>
        <Head>
            <title>Pomodoro</title>
        </Head>

        <main>
            <Component {...pageProps} />
        </main>
    </>
};

// Props
App.defaultProps = {};

export default App;
