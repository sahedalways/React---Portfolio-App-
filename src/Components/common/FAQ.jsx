import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const items = t('faq.items', { returnObjects: true });

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
        <section id="faq" className="faq__section">
            <h5 data-aos="fade-up">{t('faq.subtitle')}</h5>
            <h2 data-aos="fade-up" data-aos-delay="100">
                {t('faq.title')}
            </h2>

            <div className="container faq__container">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                            <button
                                type="button"
                                className="faq__question"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                <FiChevronDown className="faq__icon" />
                            </button>
                            {isOpen && <div className="faq__answer">{item.answer}</div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
