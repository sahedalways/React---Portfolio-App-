import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProjectDetails from "./Components/Screens/Project_Details/ProjectDetails";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import SeeMore from "./Components/Screens/See_More/SeeMore";
import Contact from "./Components/Contact/Contact";
import { HashLoader } from "react-spinners";

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
              <Route
                exact
                path="/project-details/:id"
                element={<ProjectDetails />}
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
