import React from "react";
import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Experience from "../../Experience/Experience";
import Header from "../../Header/Header";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";
import Testimonial from "../../Testimonial/Testimonial";
import SEO from "../../common/SEO";

const Home = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sk Sahed Ahmed",
    "jobTitle": "Fullstack Software Developer",
    "description":
      "Fullstack software developer with 4.5+ years of experience in web & mobile app development.",
    "url": "https://sahedahmed.netlify.app",
    "email": "mailto:ssahed65@gmail.com",
    "telephone": "+8801616516753",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Satkhira",
      "addressRegion": "Khulna",
      "addressCountry": "BD"
    },
    "sameAs": [
      "https://github.com/sahedalways",
      "https://www.linkedin.com/in/sahedstar/",
      "https://www.facebook.com/sahedstar"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "React Native",
      "AI Integration",
      "SaaS Development",
      "Automation Systems"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sk Sahed Ahmed - Portfolio",
    "url": "https://sahedahmed.netlify.app"
  };

  return (
    <>
      <SEO
        title="Home"
        description="Portfolio of Sk Sahed Ahmed, fullstack software developer from Bangladesh. Web, mobile & SaaS development using React, Next.js, Laravel and React Native."
        url="https://sahedahmed.netlify.app"
        jsonLd={[personJsonLd, websiteJsonLd]}
      />

      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
