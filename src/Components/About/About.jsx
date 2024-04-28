import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineProject } from "react-icons/ai";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import SAHED from "../../Assets/about-sahed.jpg";
import "./about.css";

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
      <Helmet>
        <title>About of Sahed</title>
      </Helmet>

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
              <small>2.11+ Years Working</small>
            </article>

            <article data-aos="fade-down" className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>40+ Worldwide</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>60+ Total Projects</small>
            </article>
          </div>
          <p>
           Introduction: Fullstack Software Developer

            Proficient in React.js/Next.js, React Native for front-end development, and PHP-Laravel for back-end solutions, I am dedicated to delivering high-quality software products.

            Currently employed at WPmarts Company, I spearhead comprehensive web and app development initiatives. Collaborating with diverse clients across various projects, I continuously expand my skill set, ensuring adaptability to meet unique program requirements.

            My passion for problem-solving drives me to embrace challenges, consistently aiming for excellence in every aspect of development. Quality is not just a priority, but a cornerstone of my work ethic, reflecting in the solutions I craft.
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
