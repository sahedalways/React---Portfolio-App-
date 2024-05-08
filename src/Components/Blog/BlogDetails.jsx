import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { CgProfile } from 'react-icons/cg';
import { FaCalendarAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import { allBlogs } from "./BlogData";
import "./blogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  const item = allBlogs.find((item) => item.id === parseInt(id));
  window.scrollTo(0, 0);
  if (item) {
    // Update document title
    document.title = item.title;

    // Update Open Graph meta tags dynamically
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', item.title);
    }
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', item.image);
    }

      setItem(item);
  }
}, [id]);



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


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
                <title>Sahed's blogs</title>
              </Helmet>

              <section id="blog__view">
                <div className="container blog__container__details">
                  <div className="blog__sahed__wrapper__details">
                    <div className="blog__img__wrapper">
                      <img
                        data-aos="zoom-in-up"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>

                  <div className="blog__content">
                    <h5 className="blog__subtitle">Title of the blog</h5>
                    <h2 className="blog__title">{item.title}</h2>

                    <div className="blog__cards">
                      <article data-aos="fade-right" className="blog__card">
                        <CgProfile className="blog__icon" />
                        <h5>Author Name</h5>
                        <small>{item.author}</small>
                      </article>

                      <article data-aos="fade-left" className="blog__card">
                        <FaCalendarAlt className="blog__icon" />
                        <h5>Publish Date</h5>
                        <small>{item.date}</small>
                      </article>
                    </div>
                  
                   <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>


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
export default BlogDetails;


