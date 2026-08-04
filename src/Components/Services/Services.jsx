import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import "./services.css";
import Process from '../Process/Process';
import BrochureDownload from '../common/BrochureDownload';

const Services = () => {
  const { t } = useTranslation();

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

  const frontendServices = t('services.frontend', { returnObjects: true });
  const backendServices = t('services.backend', { returnObjects: true });
  const aiServices = t('services.ai', { returnObjects: true });

  return (
    <>
      <section id="services">
      <h5>{t('services.subtitle')}</h5>
      <h2>{t('services.title')}</h2>

      <div className="container services__container">
        {/* Frontend section starts from here */}
      <article className="service">
      <div data-aos="slide-right" className="service__head">
        <h3><strong>{t('services.frontend_title')}</strong></h3>
      </div>

      <ul data-aos="slide-right" className="service__list">
        {frontendServices.map((point, index) => (
          <li key={index}>
            <BiCheck className="service__list__icon" />
            <p><strong>{point.title}</strong>: {point.description}</p>
          </li>
        ))}
      </ul>
    </article>

        {/* Backend section ends here */}

       <article className="service">
      <div data-aos="slide-down" className="service__head">
        <h3><strong>{t('services.backend_title')}</strong></h3>
      </div>

      <ul data-aos="slide-up" className="service__list">
        {backendServices.map((point, index) => (
          <li key={index}>
            <BiCheck className="service__list__icon" />
            <p><strong>{point.title}</strong>: {point.description}</p>
          </li>
        ))}
      </ul>
    </article>

        {/* AI Automation section ends here */}
      <article className="service">
  <div data-aos="slide-left" className="service__head">
    <h3><strong>{t('services.ai_title')}</strong></h3>
  </div>

  <ul data-aos="slide-left" className="service__list">
    {aiServices.map((point, index) => (
      <li key={index}>
        <BiCheck className="service__list__icon" />
        <p><strong>{point.title}</strong>: {point.description}</p>
      </li>
    ))}
  </ul>
</article>


      </div>

      <div className="brochure-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <BrochureDownload />
      </div>
    </section>

    <Process />
    </>
  );
};

export default Services;
