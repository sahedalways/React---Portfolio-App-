import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LOGO from '../../Assets/sahed_logo.png';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: false,
            startEvent: 'DOMContentLoaded',
            offset: 120,
            easing: 'ease',
            mirror: false,
            anchorPlacement: 'top-bottom',
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

            <div data-aos="fade-up" data-aos-duration="1200" className="footer__socials">
                <a
                    href="https://www.facebook.com/sahedstar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/sahedstar" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare />
                </a>
                <a
                    href="https://www.instagram.com/sahedstar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagramSquare />
                </a>
            </div>

            <div className="footer__copyright">
                <small>
                    <p>
                        Designed & Developed by <span>{t('intro')}</span>
                        <br />
                        Copyright &copy; {new Date().getFullYear()}, All rights reserved
                    </p>
                </small>
            </div>
        </footer>
    );
};

export default Footer;
