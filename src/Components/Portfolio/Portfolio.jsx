import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { supabase } from '../../libs/supabaseClient';
import { usePortfolioProject } from '../../hooks/usePortfolioProject';

const Portfolio = () => {
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
            <Helmet>
                <title>Projects of Sahed</title>
            </Helmet>

            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="btn_Area">
                <button
                    className={`filter-btn ${
                        btn === 'webApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('webApp')}
                >
                    Web | Software Development
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'mobileApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('mobileApp')}
                >
                    Mobile Apps Development
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'reactFullApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('reactFullApp')}
                >
                    React Full App
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'reactMiniApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('reactMiniApp')}
                >
                    React Mini App
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'mernApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('mernApp')}
                >
                    MERN App
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'domManipulations' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('domManipulations')}
                >
                    DOM Manipulations
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'phpApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('phpApp')}
                >
                    PHP App
                </button>

                <button
                    className={`filter-btn ${
                        btn === 'jqueryApp' ? 'active_btn btn btn-primary' : 'btn'
                    }`}
                    onClick={() => filterResult('jqueryApp')}
                >
                    jQuery App
                </button>
            </div>

            {isLoading ? (
                <div className="loader-wrapper">
                    <div className="spinner"></div>
                    <p>Loading projects...</p>
                </div>
            ) : filteredProjects.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <p>No projects found for this category.</p>
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
                                        <h4 className="view__Details">View Details</h4>
                                    </Link>
                                </div>

                                <a href={github} className="btn" rel="noreferrer" target="_blank">
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </article>
                        );
                    })}
                </div>
            )}

            <div className="seeMore__btn">
                <Link to="/projects" className="btn" rel="noreferrer" target="_blank">
                    See More
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;
