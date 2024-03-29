import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillHtml5, AiOutlineNodeCollapse } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";
import { FaCss3, FaLaravel, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiPhp,
  SiReact,
  SiTailwindcss
} from "react-icons/si";

import "./experience.css";

const Experience = () => {
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
    <section id="experience">
      <Helmet>
        <title>Experience of Sahed</title>
      </Helmet>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container" id="responsive">
        {/* Start of the frontend section */}
       <div data-aos="slide-right" className="experience__frontend">
  <h3>Frontend Development</h3>
  <div className="experience__content">


    <article className="experience__details">
      <IoLogoJavascript className="experience__details__icon" />
      <div>
        <h4>JavaScript</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
      <FaReact className="experience__details__icon" />
      <div>
        <h4>React Js</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
    <SiNextdotjs className="experience__details__icon" />
      <div>
        <h4>Next Js</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
     <SiReact className="experience__details__icon" />
      <div>
        <h4>React Native</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
      <SiFirebase className="experience__details__icon" />
      <div>
        <h4>Firebase</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
      <DiSass className="experience__details__icon" />
      <div>
        <h4>SASS</h4>
        <small className="text-light">Midway</small>
      </div>
    </article>


        <article className="experience__details">
      <AiFillHtml5 className="experience__details__icon" />
      <h4>HTML</h4>
      <small className="text-light">Skilled</small>
    </article>

    <article className="experience__details">
      <FaCss3 className="experience__details__icon" />
      <div>
        <h4>CSS</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

    <article className="experience__details">
      <SiTailwindcss className="experience__details__icon" />
      <div>
        <h4>Tailwind CSS</h4>
        <small className="text-light">Basic</small>
      </div>
    </article>

    <article className="experience__details">
      <BsBootstrapFill className="experience__details__icon" />
      <div>
        <h4>Bootstrap</h4>
        <small className="text-light">Skilled</small>
      </div>
    </article>

 
  </div>
</div>

        {/* End of the frontend section */}

        {/* Start of the backend section */}
        <div data-aos="slide-left" className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPhp className="experience__details__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Skilled</small>
              </div>
            </article>

            <article className="experience__details">
              <FaLaravel className="experience__details__icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Skilled</small>
              </div>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Skilled</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineNodeCollapse className="experience__details__icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Midway</small>
              </div>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__details__icon" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of the backend section */}
      </div>
    </section>
  );
};

export default Experience;
