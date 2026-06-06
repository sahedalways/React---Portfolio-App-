import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { allProjects } from "../../Portfolio/PortfolioData";
import "./SeeMore.css";

const SeeMore = () => {
  const [projects] = useState(allProjects);

  // Group projects by category dynamically
  const categories = [...new Set(projects.map((p) => p.category))];

  // Optional: Custom category title formatting
  const formatCategoryTitle = (category) => {
    const mapping = {
      webApp: "Web / Software Development",
      reactFullApp: "React Full App",
      reactMiniApp: "React Mini App",
      mernApp: "MERN App",
      phpApp: "PHP App",
      jqueryApp: "jQuery App",
      domManipulations: "DOM Manipulations",
      mobileApp: "Mobile Apps Development",
    };
    return mapping[category] || category;
  };

  return (
    <>
      <section id="portfolio">
        <Helmet>
          <title>Sahed's Portfolio - All Projects</title>
        </Helmet>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        {/* Dynamically render categories */}
        {categories.map((category) => {
          const filteredProjects = projects.filter(
            (p) => p.category === category
          );
          return (
            <div key={category}>
              <h3 className="project__category__title">
                {formatCategoryTitle(category)}
              </h3>

              <div className="container portfolio__container">
                {filteredProjects.map(({ id, image, title, github, demo }) => (
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
                ))}
              </div>
            </div>
          );
        })}

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
