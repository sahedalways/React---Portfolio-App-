import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
import About from "./Components/About/About";
import BlogDetails from "./Components/Blog/BlogDetails";
import SeeMoreBlogs from "./Components/Blog/SeeMoreBlogs";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Home from "./Components/Screens/Home/Home";
import ProjectDetails from "./Components/Screens/Project_Details/ProjectDetails";
import SeeMore from "./Components/Screens/See_More/SeeMore";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <HashLoader
          color="#007ACC"
          loading={loading}
          className="override"
          size={100}
        />
      ) : (
        <Router>
          <div style={{ overflow: "hidden" }}>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/about" element={<About />} />
              <Route exact path="/experience" element={<Experience />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/testimonial" element={<Testimonial />} />
              <Route exact path="/contact" element={<Contact />} />

              <Route exact path="/projects" element={<SeeMore />} />
              <Route exact path="/blogs" element={<SeeMoreBlogs />} />
              <Route
                exact
                path="/project-details/:id"
                element={<ProjectDetails />}
              />

              <Route
                exact
                path="/blog-details/:id"
                element={<BlogDetails />}
              />

              <Route exact path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
