import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee, faTwitter } from "@fortawesome/free-solid-svg-icons";
import "../App.css"


function Footer() {
    return (
      <div className="footer">
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={["fas", "coffee"]} />
        <FontAwesomeIcon icon={["far", "twitter"]} />
        <FontAwesomeIcon icon={faCoffee} />
        {/* <FontAwesomeIcon icon={FaTwitterSquare} /> */}
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
}

export default Footer
