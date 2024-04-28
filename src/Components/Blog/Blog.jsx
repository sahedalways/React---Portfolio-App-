import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { allBlogs } from "./BlogData";
import "./blog.css";

const Blog = () => {
  const [blogs, setProject] = useState(allBlogs);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "left-bottom",
    });
  }, []);

  return (
    <section id="blog">
      <Helmet>
        <title>Blogs</title>
      </Helmet>

      <h5>Recent Blogs</h5>
      <h2>Blog</h2>

 

      <div className="container blog__container">
        {blogs.slice(0, 3).map(({ id, image, title, desc, author, date }) => {
          const truncatedDesc = desc.length > 10 ? desc.slice(0, 10) + "..." : desc;
          return (
            <article key={id} data-aos="slide-left" className="blog__item">
              <div className="blog__item__image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <Link to={`blog-details/${id}`}>
                  <h4 className="view__Details">View Details</h4>
                  <span className="blog_author">{author}</span>
                  <span className="blog_date">{date}</span>
                  <p className="blog_desc">{truncatedDesc}</p>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="seeMore__btn">
        <Link
          to="/blogs"
          className="btn"
          rel="noreferrer"
          target="_blank"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default Blog;
