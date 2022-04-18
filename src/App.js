import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
