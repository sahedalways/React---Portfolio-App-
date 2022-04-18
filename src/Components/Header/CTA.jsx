import React from "react";
import CV from "../../Assets/CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="cta">
      <a data-aos="fade-right" href={CV} download className="btn">
        Catch my CV
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
