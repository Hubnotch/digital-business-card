import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Button (){
    return (
        <div className="button">
            <button type="button" className="btn email"><FontAwesomeIcon icon={faEnvelope}/> Email</button>
            <button type="button" className="btn linkedin"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</button>
        </div>
    )
}

export default Button