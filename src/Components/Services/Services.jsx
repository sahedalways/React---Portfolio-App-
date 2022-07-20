import React, { useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <h5>Offers I Provide</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Wordpress section starts from here */}
        <article className="service">
          <div data-aos="slide-right" className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul data-aos="slide-right" className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Client-Side development.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Test website for usabillity.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Ensure browser compatibility.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>1+ years visual design experience focusing strong on UI/UX.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>
                1+ years of front-end web development specifically with js,
                react, CSS, Bootstrap, PHP, SASS, Firebase etc.
              </p>
            </li>
          </ul>
        </article>

        {/* Wordpress section ends here */}

        {/* Web development section starts from here */}
        <article className="service">
          <div data-aos="slide-down" className="service__head">
            <h3>Mern Stack Development</h3>
          </div>

          <ul data-aos="slide-down" className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>In-depth knowledge of NodeJS, ExpressJS or Restify.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Ability to bind UI elements to JavaScript object models.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Experience creating RESTful services with node js.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Proficiency in OOP and database concept.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Proven experience in front-end & backend-end development.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>
                Knowledge of modern frameworks and design pattern like react.
              </p>
            </li>
          </ul>
        </article>

        {/* Web development section ends here */}

        {/* Content creation section starts from here */}
        <article className="service">
          <div data-aos="slide-left" className="service__head">
            <h3>Wordpress Development</h3>
          </div>

          <ul data-aos="slide-left" className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Consulting & Discovery & Custom design or development</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Strong knowledge of theme customization with elementor.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Proven experience of theme customization.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Content creation section ends here */}
      </div>
    </section>
  );
};

export default Services;
