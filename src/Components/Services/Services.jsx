import React, { useEffect } from "react";
import "./services.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
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
            <h3>Wordpress Design</h3>
          </div>

          <ul data-aos="slide-right" className="service__list">
            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Wordpress section ends here */}

        {/* Web development section starts from here */}
        <article className="service">
          <div data-aos="slide-down" className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul data-aos="slide-down" className="service__list">
            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Web development section ends here */}

        {/* Content creation section starts from here */}
        <article className="service">
          <div data-aos="slide-left" className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul data-aos="slide-left" className="service__list">
            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className="service__list__icon" />
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
