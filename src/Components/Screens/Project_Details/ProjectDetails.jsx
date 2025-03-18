import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsFileCodeFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { allProjects } from "../../Portfolio/PortfolioData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [showFullText, setShowFullText] = useState(false);
  const [loading, setLoading] = useState(false);
 const [showDesc, setShowDesc] = useState(false);
 const [isInitialFocusDesc, setIsInitialFocusDesc] = useState(false);
  const descRef = useRef(null);

  // toggle show more and less more button
 const toggleShowFullText = () => {
    setShowFullText(!showFullText);
     setIsInitialFocusDesc(true);
    setShowDesc(!showDesc);
  };

    useEffect(() => {
    if (showDesc && descRef.current && isInitialFocusDesc) {
      descRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDesc]);

    const maxLength = 300;
  const truncatedText = item?.desc?.slice(0, maxLength);

  

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
                      <article data-aos="fade-right" className="project__card">
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
