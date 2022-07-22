import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import SAHED from "../../Assets/sahed.jpg";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,56
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <header>
      <div className="container header_container">
        <h5>Hey there! I am</h5>
        <h1 data-aos="fade-right">Sk Sahed Ahmed</h1>
        <h5 className="text-light">
          <Typical
            steps={[
              "React Developer",
              3000,
              "Mern-Stack Developer",
              3000,
              "Content Creator",
              3000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div data-aos="fade-up" className="me">
          <img id="pic" src={SAHED} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Below
        </a>
      </div>
    </header>
  );
};

export default Header;
