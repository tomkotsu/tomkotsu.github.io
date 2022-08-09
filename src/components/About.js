import React from "react";
import reactIcon from "../imgs/skills-icons/React-icon.svg";
import jsIcon from "../imgs/skills-icons/js-icon.svg";
import htmlIcon from "../imgs/skills-icons/html-icon.svg";
import cssIcon from "../imgs/skills-icons/css-icon.svg";
import sassIcon from "../imgs/skills-icons/sass-icon.svg";
import webpackIcon from "../imgs/skills-icons/webpack-icon.svg";
import tailwindIcon from "../imgs/skills-icons/tailwind-icon.svg";
import djangoIcon from "../imgs/skills-icons/django-icon.svg";
import npmIcon from "../imgs/skills-icons/npm-icon.svg";
import vscodeIcon from "../imgs/skills-icons/vscode-icon.svg";
import pythonIcon from "../imgs/skills-icons/python-icon.svg";
import gitIcon from "../imgs/skills-icons/git-icon.svg";
const About = (props) => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <div className="intro__wrapper">
          <h1 className="hi">Hi.</h1>
          <p className="info">
            I'm a web developer using React, JavaScript and SASS to build dynamic,
            responsive sites that do useful things. I'm applying my professional Data Science experience with
            Python and SQL to learn more about the backend, too. 
            <br></br>
            <br></br>
            I want to build web applications that are not only visually pleasing and alive with animation,
            but also benefit their users, and hopefully the planet.
          </p>
        </div>
        <hr></hr>
        <div className="skills__wrapper">
          <h1 className="skills-title">skills</h1>
          <div className="skill-list">
            <a href="https://reactjs.org/" target="_blank">
              <img src={reactIcon} alt="react icon" />
            </a>

            <a href="https://www.javascript.com/" target="_blank">
              <img src={jsIcon} alt="js icon" />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <img src={htmlIcon} alt="html icon" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <img src={cssIcon} alt="css icon" />
            </a>
            
            <a href="https://tailwindcss.com/" target="_blank">
              <img src={tailwindIcon} alt="tailwind icon" />
            </a>

            <a href="https://sass-lang.com/" target="_blank">
              <img src={sassIcon} alt="sass icon" />
            </a>

            <a href="https://webpack.js.org/" target="_blank">
              <img src={webpackIcon} alt="webpack icon" />
            </a>

            <a href="https://www.python.org/" target="_blank">
              <img src={pythonIcon} alt="python icon" />
            </a>


            <a href="https://www.djangoproject.com/" target="_blank">
              <img src={djangoIcon} alt="django icon" />
            </a>

            <a href="https://www.npmjs.com/" target="_blank">
              <img src={npmIcon} alt="npm icon" />
            </a>

            <a href="https://code.visualstudio.com/" target="_blank">
              <img src={vscodeIcon} alt="vscode icon" />
            </a>

            <a href="https://git-scm.com/" target="_blank">
              <img src={gitIcon} alt="git icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
