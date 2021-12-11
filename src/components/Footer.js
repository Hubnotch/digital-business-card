import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";


function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="icons"/>
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icons" />
      <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="icons" />
      <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icons" />
    </div>
  );
}

export default Footer;
