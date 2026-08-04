import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { useTranslation } from 'react-i18next';
import { usePortfolioProject } from '../../hooks/usePortfolioProject';
import SEO from '../common/SEO';
import Skeleton from '../common/Skeleton';

const CATEGORIES = [
    'webApp',
    'mobileApp',
    'reactFullApp',
    'reactMiniApp',
    'mernApp',
    'domManipulations',
    'phpApp',
    'jqueryApp',
];

const Portfolio = () => {
    const { t } = useTranslation();
    const [btn, setBtn] = useState('webApp');

    const { data: projects = [], isLoading } = usePortfolioProject();

    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        if (projects.length > 0) {
            const defaultData = projects.filter((item) => item.category === 'webApp');
            setFilteredProjects(defaultData);
        }
    }, [projects]);

    // Filter function
    const filterResult = (category) => {
        setBtn(category);

        const result = projects.filter((item) => item.category === category);

        setFilteredProjects(result);
    };

    return (
        <section id="portfolio">
            <SEO
                title="Portfolio & Projects"
                description="Explore projects by Sk Sahed Ahmed: web applications, mobile apps, React apps, MERN apps, PHP apps and more."
                url="https://sahedahmed.netlify.app/portfolio"
            />

            <h5>{t('portfolio.subtitle')}</h5>
            <h2>{t('portfolio.title')}</h2>

            <div className="btn_Area">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${
                            btn === category ? 'active_btn btn btn-primary' : 'btn'
                        }`}
                        onClick={() => filterResult(category)}
                    >
                        {t(`portfolio.filter.${category}`)}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="container portfolio__container">
                    {[...Array(6)].map((_, i) => (
                        <article key={i} className="portfolio__item">
                            <div className="portfolio__item__image">
                                <Skeleton height="220px" />
                                <Skeleton height="20px" style={{ marginTop: '12px' }} />
                            </div>
                            <Skeleton height="42px" style={{ marginTop: '12px' }} />
                        </article>
                    ))}
                </div>
            ) : filteredProjects.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <p>{t('portfolio.empty')}</p>
                </div>
            ) : (
                <div className="container portfolio__container">
                    {filteredProjects.slice(0, 9).map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} data-aos="slide-left" className="portfolio__item">
                                <div className="portfolio__item__image">
                                    <img src={image} alt={title} />
                                    <h3>{title}</h3>
                                    <Link to={`project-details/${id}`}>
                                        <h4 className="view__Details">{t('portfolio.view_details')}</h4>
                                    </Link>
                                </div>

                                <a href={github} className="btn" rel="noreferrer" target="_blank">
                                    {t('portfolio.github')}
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {t('portfolio.live_demo')}
                                </a>
                            </article>
                        );
                    })}
                </div>
            )}

            <div className="seeMore__btn">
                <Link to="/projects" className="btn" rel="noreferrer" target="_blank">
                    {t('portfolio.see_more')}
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;
