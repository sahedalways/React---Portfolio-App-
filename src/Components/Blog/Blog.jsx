import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { allBlogs } from "./BlogData";
import "./blog.css";
import SEO from '../common/SEO';

const Blog = () => {
  const [blogs] = useState(allBlogs);
  const { t } = useTranslation();

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
      <SEO
        title="Blog"
        description="Read technical articles and insights by Sk Sahed Ahmed on web development, React, Next.js, Laravel and software engineering."
        url="https://sahedahmed.netlify.app/blogs"
      />

      <h5>{t('blog.subtitle')}</h5>
      <h2>{t('blog.title')}</h2>

      <div className="container blog__container">
        {blogs
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6)
          .map(({ id, image, title, desc, author, date, video }) => {
            const truncatedDesc =
              desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
            return (
              <article key={id} data-aos="slide-left" className="blog__item">
                <div className="blog__item__image">
                  <div className="blog__img__wrapper">
                    {image ? (
                      <img src={image} alt={title} />
                    ) : video ? (
                      <div dangerouslySetInnerHTML={{ __html: video }} />
                    ) : null}
                  </div>

                  <h3 className="blog_title">{title}</h3>
                  <Link to={`blog-details/${id}`}>
                    <h4 className="view__Details">{t('blog.view_details')}</h4>
                    <div className="blog_sub_info">
                      <span className="blog_author">{author}</span>
                      <span className="blog_date">{date}</span>
                    </div>
                    <p
                      className="blog_desc"
                      dangerouslySetInnerHTML={{ __html: truncatedDesc }}
                    ></p>
                  </Link>
                </div>
              </article>
            );
          })}
      </div>

      <div className="seeMore__btn">
        <Link to="/blogs" className="btn" rel="noreferrer" target="_blank">
          {t('blog.see_more')}
        </Link>
      </div>
    </section>
  );
};

export default Blog;
