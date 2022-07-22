import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../../Portfolio/PortfolioData";
import "./ProjectDetails.css";
import { CgProfile } from "react-icons/cg";
import { BsFileCodeFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const item = allProjects.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          {loading ? (
            <HashLoader
              color="#007ACC"
              loading={loading}
              className="override"
              size={100}
            />
          ) : (
            <>
              <Helmet>
                <title>Sahed's Project</title>
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
                      <article data-aos="fade-right" className="project__card">
                        <CgProfile className="project__icon" />
                        <h5>Author Name</h5>
                        <small>{item.authorName}</small>
                      </article>

                      <article data-aos="fade-left" className="project__card">
                        <BsFileCodeFill className="project__icon" />
                        <h5>Used Elements</h5>
                        <small>{item.use}</small>
                      </article>
                    </div>

                    <p>{item.desc}</p>

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
