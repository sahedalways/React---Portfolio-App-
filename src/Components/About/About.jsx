import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiOutlineProject } from 'react-icons/ai';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import SAHED from '../../Assets/about-sahed.jpg';
import './about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
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
        <section id="about">
            <Helmet>
                <title>About of Sahed</title>
            </Helmet>

            <h5>{t('get_to_know')}</h5>
            <h2>{t('about_me')}</h2>

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
                            <h5>{t('about.stats.0.label')}</h5>
                            <small>{t('about.stats.0.value')}</small>
                        </article>

                        <article data-aos="fade-down" className="about__card">
                            <FaUsers className="about__icon" />
                            <h5>{t('about.stats.1.label')}</h5>
                            <small>{t('about.stats.1.value')}</small>
                        </article>

                        <article data-aos="fade-left" className="about__card">
                            <AiOutlineProject className="about__icon" />
                            <h5>{t('about.stats.2.label')}</h5>
                            <small>{t('about.stats.2.value')}</small>
                        </article>
                    </div>
                    <div className="intro">
                        <p className="intro-title">{t('about.intro_section.title')}</p>

                        <p className="intro-text"> {t('about.intro_section.description')}</p>

                        <p className="cta-line">
                            <strong> {t('about.intro_section.cta_line')}</strong>
                        </p>
                    </div>

                    <a
                        data-aos="slide-left"
                        href="#contact"
                        className="btn btn-primary"
                        id="btnResponsive"
                    >
                        {t('cta.lets_talk')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
