import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
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
                <title>Blog Details</title>
              </Helmet>
              {/* Your blog details content goes here */}
            </>
          )}
        </>
      ) : (
        <p>No blog item found.</p>
      )}
    </>
  );
};

export default BlogDetails;