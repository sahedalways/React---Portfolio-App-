import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import CV from '../../Assets/CV.pdf';
import { useTranslation } from 'react-i18next';

const CTA = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);
    return (
        <div className="cta">
            <a data-aos="fade-right" href={CV} download className="btn">
                {t('cta.get_cv')}
            </a>
            <a data-aos="fade-left" href="#contact" className="btn btn-primary">
                {t('cta.lets_talk')}
            </a>
        </div>
    );
};

export default CTA;
