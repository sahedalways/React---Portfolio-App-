import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { allProjects } from "../../Portfolio/PortfolioData";
import "./SeeMore.css";

const SeeMore = () => {
  const [projects, setProjects] = useState(allProjects);

  return (
    <>
      <section id="portfolio">
        <Helmet>
          <title>Sahed's Portfolio - All Projects</title>
        </Helmet>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <h3 className="project__category__title">Web development</h3>
        <div className="container portfolio__container">
          {projects.slice(0, 10).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">Apps Development</h3>
        <div className="container portfolio__container">
          {projects.slice(10, 11).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">React Full App</h3>
        <div className="container portfolio__container">
          {projects.slice(11, 20).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">React Mini App</h3>
        <div className="container portfolio__container">
          {projects.slice(20, 26).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">Mern App</h3>
        <div className="container portfolio__container">
          {projects.slice(26, 27).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">DOM Manipulations</h3>
        <div className="container portfolio__container">
          {projects.slice(27, 33).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">PHP App</h3>
        <div className="container portfolio__container">
          {projects.slice(33, 35).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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

        <h3 className="project__category__title">jQuery App</h3>
        <div className="container portfolio__container">
          {projects.slice(35, 36).map(({ id, image, title, github, demo }) => {
            return (
              <article
                key={id}
                data-aos="slide-left"
                className="portfolio__item"
              >
                <div className="portfolio__item__image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <Link to={`/project-details/${id}`}>
                    <h4 className="view__Details">View Details</h4>
                  </Link>
                </div>

                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
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
        <div className="seeMore__btn">
          <a
            href="https://github.com/sahedalways"
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            More Projects
          </a>
        </div>
      </section>
    </>
  );
};

export default SeeMore;
