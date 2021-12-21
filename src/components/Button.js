import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Button() {
  return (
    <div className="button">
      <a
        href="mailto:love2ekene@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="btn email">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </button>
      </a>

      <a
        href="https://www.linkedin.com/in/ekene-ugwuanyi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="btn linkedin">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Button;
