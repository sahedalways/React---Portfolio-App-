import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sahedahmed.netlify.app';
const DEFAULT_IMAGE =
    'https://i.ibb.co/Xx8TR9fr/Whats-App-Image-2025-03-17-at-23-28-56-3a126ea6.jpg';

const DEFAULT_TITLE = 'Sk Sahed Ahmed - Fullstack Software Developer';
const DEFAULT_DESCRIPTION =
    'Sk Sahed Ahmed is a fullstack software developer with 4.5+ years of experience building scalable web & mobile applications using React, Next.js, Laravel and React Native.';

const SEO = ({ title, description, image, url, type = 'website', jsonLd }) => {
    const pageTitle = title ? `${title} | Sk Sahed Ahmed` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageImage = image || DEFAULT_IMAGE;
    const pageUrl = url || SITE_URL;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={pageUrl} />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content="Sk Sahed Ahmed - Portfolio Website" />

            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:card" content="summary_large_image" />

            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
};

export default SEO;
