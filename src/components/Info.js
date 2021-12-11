import React from "react";
import Display from "./Display"
import Button from "./Button.js";
import "../App.css";

function Info() {
  return (
    <div className="info">
      <Display />
      <div className="info--details">
        <h1>Ugwuanyi Ekene</h1>
        <p className="info--role">Frontend Developer</p>
        <p className="info--reach"><a href="https://ekeneugwuanyi.netlify.app/">portfolio</a></p>
        <Button />
      </div>
    </div>
  );
}

export default Info;
