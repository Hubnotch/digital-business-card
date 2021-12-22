import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Button() {
  return (
    <div className="button">
      <a className="btn email"
        href="mailto:love2ekene@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </button>
      </a>

      <a className="btn linkedin"
        href="https://www.linkedin.com/in/ekene-ugwuanyi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Button;
