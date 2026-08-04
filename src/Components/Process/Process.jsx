import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck } from 'react-icons/fi';
import './Process.css';

const ICONS = [FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck];

const Process = () => {
    const { t } = useTranslation();
    const steps = t('process.steps', { returnObjects: true });

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
        <section id="process" className="process__section">
            <h5>{t('process.subtitle')}</h5>
            <h2>{t('process.title')}</h2>

            <div className="container process__container">
                {steps.map((step, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <article
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="process__step"
                        >
                            <div className="process__step__icon">
                                <Icon />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <span className="process__step__number">0{index + 1}</span>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Process;
