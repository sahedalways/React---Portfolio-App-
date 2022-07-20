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
              <small>40+ Worldwide</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>60+ Total Projects</small>
            </article>
          </div>
          <p>
            Hi There! I am MERN/Frontend web developer. I am good at HTML, CSS,
            Bootstarp, JavaScript, REACT, NodeJS/ExpressJS, PHP, SASS, Firebase,
            Wordpress etc. I'm also good at video editing and M/S application. I
            have worked as an Web Developer in IT Department in Satkhira
            Municipality. I was responsible for all the IT related work of that
            organization. Then I worked with different clients in different
            programs. I am currently working on online marketplaces. And I'm
            expanding my skills day by day. I'm so active and confident
            everywhere and front of anyone. I always love to struggle. I always
            priority to quality. I believe that 'there are no end position to
            increase the quality of anything, quality is an infinity matter
            indeed. Thank you!
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
