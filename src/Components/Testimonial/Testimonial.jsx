import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import TestimonialsData from './TestimonialsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft } from 'react-icons/fa'; // রিঅ্যাক্ট আইকন যোগ করলে সুন্দর দেখাবে
import { useTranslation } from 'react-i18next';
import SEO from '../common/SEO';
import TestimonialForm from '../common/TestimonialForm';

import { Pagination, Autoplay } from 'swiper'; // Autoplay ইমপোর্ট করুন
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { t } = useTranslation();
    const [Data] = useState(TestimonialsData);

    return (
        <section id="testimonials">
            <SEO
                title="Testimonials"
                description="Read reviews from clients who have worked with Sk Sahed Ahmed on web & mobile app development projects."
                url="https://sahedahmed.netlify.app/testimonial"
            />
            <h5>{t('testimonial.subtitle')}</h5>
            <h2>{t('testimonial.title')}</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
            >
                {Data.map(({ id, name, company, avatar, review }) => (
                    <SwiperSlide key={id} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>

                        <h5 className="client__name">{name}</h5>
                        {company && <small className="client__company">{company}</small>}

                        <div className="quote__icon">
                            <FaQuoteLeft
                                style={{
                                    color: 'var(--color-primary)',
                                    marginTop: '1rem',
                                    opacity: 0.4,
                                }}
                            />
                        </div>

                        <p className="client__review">{review}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <TestimonialForm />
        </section>
    );
};

export default Testimonial;
