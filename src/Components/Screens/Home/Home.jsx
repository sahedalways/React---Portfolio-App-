import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Experience from "../../Experience/Experience";
import Header from "../../Header/Header";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";
import Testimonial from "../../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sahed's Portfolio - Home</title>
      </Helmet>

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
