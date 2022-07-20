import React from "react";
import Navbar from "./Components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Screens/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProjectDetails from "./Components/Screens/Project_Details/ProjectDetails";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/project-details/:id"
            element={<ProjectDetails />}
          />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
