import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import LOGO from "../../Assets/sahed_logo.png";
import "./footer.css";

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
        <a href="https://www.facebook.com/sahedstar">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/sahedstar">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/sahedstar">
          <FaInstagramSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Designed & Developed by <span>Sk Sahed Ahmed</span>
          <br /> Copyright &copy; 2024, All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
