import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { allBlogs } from "./BlogData";
import "./seeMoreBlogs.css";

const SeeMoreBlogs = () => {
  const [blogs, setBlogs] = useState(allBlogs);

  return (
    <>
      <section id="blog">
        <Helmet>
          <title>Sahed's Portfolio - All Blogs</title>
        </Helmet>
        <h2>All Blogs</h2>

      
        <div className="container blog__container">
          {blogs.map(({ id, image, title, desc, author, date }) => {
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
      </section>
    </>
  );
};

export default SeeMoreBlogs;
