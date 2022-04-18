import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImLinkedin />
      </a>
      <a
        href="https://www.github.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.facebook.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
