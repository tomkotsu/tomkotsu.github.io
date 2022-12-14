import React from "react";
import Switch from "./Switch";

import pdf from "../tb-cv.pdf";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";
import { HbContext } from "./HbLogic";

const Hamburger = () => {
  const { hbOpen, setHbOpen } = React.useContext(HbContext);

  return (
    <div className="hb-menu">
      <Switch place="hb-switch" />
      <div className="hb-links">

        <a href="#about" onClick={() => setHbOpen(!hbOpen)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setHbOpen(!hbOpen)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setHbOpen(!hbOpen)}>
          Contact
        </a>
      </div>
      <div className="hamburger__wrapper">
        <div className="hb-contact">
          <a href="mailto:tombinnie@protonmail.com">
            <img src={emailIcon} />
          </a>
          <a href={pdf} target="_blank">
            <img src={cvIcon} />
          </a>
          <a href="https://github.com/tomkotsu" target="_blank">
            <img src={githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank">
            <img src={linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
