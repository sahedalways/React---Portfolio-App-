import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import SAHED from '../../Assets/sahed.jpg';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            disable: false,
            startEvent: 'DOMContentLoaded',
            offset: 120,
            easing: 'ease',
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <header>
            <div className="container header_container">
                <h5>{t('greeting')}</h5>
                <h1 data-aos="fade-right">{t('intro')}</h1>
                <h5 className="text-light">
                    <Typical
                        steps={[
                            'NextJS Developer',
                            3000,
                            'PHP-Laravel Developer',
                            3000,
                            'Fullstack Software Developer',
                            3000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h5>
                <CTA />
                <HeaderSocials />

                <div data-aos="fade-up" className="me">
                    <img id="pic" src={SAHED} alt="sahed-photo" />
                </div>

                <a href="#contact" className="scroll__down">
                    {t('scroll_below')}
                </a>
            </div>
        </header>
    );
};

export default Header;
