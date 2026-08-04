import React from 'react';
import SEO from './SEO';

const Page = ({ title, description, url, children }) => (
    <>
        <SEO title={title} description={description} url={url} />
        {children}
    </>
);

export default Page;
