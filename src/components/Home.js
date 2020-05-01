import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Ross Crawford</h1>
      <h2 className="subtitle">Web Developer</h2>
      <div className="links">
        <a
          href="https://github.com/ross-crawford"
          target="_blank"
          className="link"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/rosscrawfordwebdev/"
          target="_blank"
          className="link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/ross.crawford.77"
          target="_blank"
          className="link"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/rawsslol/"
          target="_blank"
          className="link"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Home;
