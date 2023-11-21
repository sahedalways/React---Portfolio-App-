import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CV from "../../Assets/CV.pdf";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="cta">
      <a data-aos="fade-right" href={CV} download className="btn">
        Get CV
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
