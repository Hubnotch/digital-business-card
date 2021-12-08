import React from "react";
import Button from "./Button.js";
import ProfilePicture from "../images/profile-picture.jpg";
import "../App.css";

function Info() {
  return (
    <div className="info">
      <img src={ProfilePicture} alt="profile pic" />
      <div className="info--details">
        <h1>Ugwuanyi Ekene</h1>
        <p>Frontend Developer</p>
        <p>Reach me here</p>
        <Button />
      </div>
    </div>
  );
}

export default Info;
