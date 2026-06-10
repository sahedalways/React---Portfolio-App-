import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsFileCodeFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import './ProjectDetails.css';
import { usePortfolioProject } from '../../../hooks/usePortfolioProject';

const ProjectDetails = () => {
    const { id } = useParams();
    const descRef = useRef(null);

    const { data: projects = [], isLoading } = usePortfolioProject();

    const item = projects.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (descRef.current) {
            descRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [item]);

    return (
        <>
            {item ? (
                <>
                    {isLoading ? (
                        <HashLoader
                            color="#007ACC"
                            loading={isLoading}
                            className="override"
                            size={100}
                        />
                    ) : (
                        <>
                            <Helmet>
                                <title>Sahed's Projects</title>
                            </Helmet>

                            <section id="project__view">
                                <div className="container project__container">
                                    <div className="project__sahed__wrapper">
                                        <div className="project__img__wrapper">
                                            <img
                                                data-aos="zoom-in-up"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </div>
                                    </div>

                                    <div className="project__content">
                                        <h5 className="project__subtitle">Name of the project</h5>
                                        <h2 className="project__title">{item.title}</h2>

                                        <div className="project__cards">
                                            <article
                                                data-aos="fade-right"
                                                className="project__card"
                                            >
                                                <CgProfile className="project__icon" />
                                                <h5>Author Name</h5>
                                                <small>{item.authorName}</small>
                                            </article>

                                            <article data-aos="fade-left" className="project__card">
                                                <BsFileCodeFill className="project__icon" />
                                                <h5>Used Technologies</h5>
                                                <small>{item.use}</small>
                                            </article>
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: item.desc }} />

                                        <div className="project__btn">
                                            <a
                                                href={item.github}
                                                className="btn"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                            <a
                                                href={item.demo}
                                                className="btn btn-primary"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </>
            ) : (
                <h1>Item not found!</h1>
            )}
        </>
    );
};

export default ProjectDetails;
