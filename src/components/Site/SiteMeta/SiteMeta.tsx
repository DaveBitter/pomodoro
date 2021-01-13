// Libs
import React from 'react';
import Head from 'next/head';

// Utils

// Resources

// Components

// Interface
interface IProps { }

// Component
const SiteMeta = ({ }: IProps) => {
    const title = `Dave Bitter | Pomodoro`;
    const description = 'A neumorphic Pomodoro/Timer to help you stay on track!';
    const image = '/img/hero.jpg'

    return <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='content-language' content='en' />
        <meta name='viewport' id='viewporttag' content='width=device-width, user-scalable=no, initial-scale=1' />

        <link rel='apple-touch-icon' sizes='57x57' href='/img/favicons/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/img/favicons/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/img/favicons/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/img/favicons/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/img/favicons/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/img/favicons/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/img/favicons/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/img/favicons/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/img/favicons/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/img/favicons/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/img/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/img/favicons/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/img/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />

        <meta name='msapplication-TileColor' content='#1f2141' />
        <meta name='msapplication-TileImage' content='/img/favicons/ms-icon-144x144.png' />

        <meta name='theme-color' content='#1f2141'></meta>

        <title>{title}</title>
        <meta name='description' content={description} />

        <meta property='og:image' content={image} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:locale' content='en' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='pomodoro.davebitter.com' />
        <meta property='article:author' content='Dave Bitter' />
        <meta property='article:publisher' content='Dave Bitter' />
        <meta name='keywords' content={'pomodoro, timer, neumorphic, neumorphism, dave, bitter, dave bitter, portfolio, front-end, frontend, developer, engineer, designer, front-end developer, front-end engineer, front-end-designer'} />

        <meta name='twitter:card' content={image} />
        <meta name='twitter:site' content='dave_bitter' />
        <meta name='twitter:creator' content='dave_bitter' />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://pomodoro.davebitter.com${image}`} />
    </Head>
};

// Props
SiteMeta.defaultProps = {};

export default SiteMeta;
