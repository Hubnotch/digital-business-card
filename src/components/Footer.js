import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/hubnotch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="icons" />
      </a>

      <a
        href="https://www.facebook.com/ugwuanyi.l.ekene"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icons" />
      </a>
      <a
        href="https://www.instagram.com/lillegenius/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="icons" />
      </a>
      <a
        href="https://github.com/Hubnotch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icons" />
      </a>
    </div>
  );
}

export default Footer;
