import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../common/SEO';
import FAQ from '../common/FAQ';
import Process from '../Process/Process';
import './Pricing.css';

const Pricing = () => {
    const { t } = useTranslation();
    const plans = t('pricing.plans', { returnObjects: true });

    return (
        <>
            <section id="pricing" className="pricing__section">
                <SEO
                    title="Pricing & Packages"
                    description="Transparent pricing packages for web & mobile app development by Sk Sahed Ahmed. Basic, Standard and Premium plans with clear deliverables."
                    url="https://sahedahmed.netlify.app/pricing"
                />

                <h5 data-aos="fade-up">{t('pricing.subtitle')}</h5>
                <h2 data-aos="fade-up" data-aos-delay="100">
                    {t('pricing.title')}
                </h2>

                <div className="container pricing__container">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`pricing__card ${
                                plan.featured ? 'pricing__card--featured' : ''
                            }`}
                        >
                            {plan.featured && (
                                <span className="pricing__badge">{t('pricing.popular')}</span>
                            )}
                            <h3 className="pricing__name">{plan.name}</h3>
                            <p className="pricing__desc">{plan.description}</p>

                            <div className="pricing__price">
                                {plan.price && <span className="pricing__amount">{plan.price}</span>}
                                {plan.priceNote && (
                                    <span className="pricing__note">{plan.priceNote}</span>
                                )}
                            </div>

                            <ul className="pricing__features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <FiCheck className="pricing__check" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="btn btn-primary pricing__cta">
                                {plan.cta || t('pricing.get_started')}
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <Process />
            <FAQ />
        </>
    );
};

export default Pricing;
