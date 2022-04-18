import React, { useEffect } from "react";
import "./about.css";
import SAHED from "../../Assets/about-sahed.jpg";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__sahed">
          <div className="about__sahed__image">
            <img data-aos="zoom-in-up" src={SAHED} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="fade-right" className="about__card">
              <BsBookmarkCheckFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article data-aos="fade-down" className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>60+ Total Projects</small>
            </article>
          </div>
          <p>
            I always love to learn new skills. Clean coding is my passion. I
            always maintain my work's quality. I believe that, There should not
            compromise about increasing quality. Because quality is an infinity
            matter.
          </p>

          <a
            data-aos="slide-left"
            href="#contact"
            className="btn btn-primary"
            id="btnResponsive"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
