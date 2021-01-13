// Libs
import React from 'react';
import NextDocument, { Html, Main, Head, NextScript } from "next/document";

// Utils

// Resources

// Components

// Component
class Document extends NextDocument {
    render() {
        return <Html lang='en'>
            <Head></Head>
            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    }
}

export default Document;
