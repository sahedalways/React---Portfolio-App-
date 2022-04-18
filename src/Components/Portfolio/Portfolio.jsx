import React, { useEffect } from "react";
import "./portfolio.css";
import { useState } from "react";
import PortfolioData from "./PortfolioData";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [Data, setData] = useState(PortfolioData);

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} data-aos="slide-left" className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
    </section>
  );
};

export default Portfolio;
