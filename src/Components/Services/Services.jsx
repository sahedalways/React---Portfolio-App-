import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BiCheck } from "react-icons/bi";
import { WordpressServices, backendServices, frontendServices } from "./ServicesPoints";
import "./services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section id="services">
      <Helmet>
        <title>Sahed's Services</title>
      </Helmet>
      <h5>Offers I Provide</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Frontend section starts from here */}
      <article className="service">
      <div data-aos="slide-right" className="service__head">
        <h3><strong>Frontend Development</strong></h3>
      </div>

      <ul data-aos="slide-right" className="service__list">
        {frontendServices.map((point, index) => (
          <li key={index}>
            <BiCheck className="service__list__icon" />
            <p><strong>{point.title}</strong>: {point.description}</p>
          </li>
        ))}
      </ul>
    </article>

        {/* Backend section ends here */}

       <article className="service">
      <div data-aos="slide-down" className="service__head">
        <h3><strong>Backend Development</strong></h3>
      </div>

      <ul data-aos="slide-up" className="service__list">
        {backendServices.map((point, index) => (
          <li key={index}>
            <BiCheck className="service__list__icon" />
            <p><strong>{point.title}</strong>: {point.description}</p>
          </li>
        ))}
      </ul>
    </article>

        {/* Wordpress development section ends here */}
      <article className="service">
  <div data-aos="slide-left" className="service__head">
    <h3><strong>Wordpress Development</strong></h3>
  </div>

  <ul data-aos="slide-left" className="service__list">
    {WordpressServices.map((point, index) => (
      <li key={index}>
        <BiCheck className="service__list__icon" />
        <p><strong>{point.title}</strong>: {point.description}</p>
      </li>
    ))}
  </ul>
</article>


      </div>
    </section>
  );
};

export default Services;
