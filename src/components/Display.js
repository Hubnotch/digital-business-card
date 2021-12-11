import React from 'react'
import ProfilePicture from "../images/profile-picture.jpg";

function Display() {
    return (
      <div className="display">
        <img src={ProfilePicture} alt="profile pic" />
      </div>
    );
}

export default Display
