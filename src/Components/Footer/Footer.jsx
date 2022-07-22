import React, { useEffect } from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import LOGO from "../../Assets/sahed_logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer>
      <a data-aos="fade-up" href="#sk" className="footer__logo">
        <img src={LOGO} alt="LOGO" />
      </a>

      <ul data-aos="fade-left" className="permalinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div data-aos="fade-down" className="footer__socials">
        <a href="https://www.facebook.com/altamish.sahed.5">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/Rockstar_Sahed">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/sk.sahed.ahmed/">
          <FaInstagramSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Designed & Developed by <span>Sk Sahed Ahmed</span>
          <br /> Copyright &copy; 2022, All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
