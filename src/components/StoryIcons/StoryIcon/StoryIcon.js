import React from "react";

import "./StoryIcon.css";

const StoryIcon = ({ image, name }) => {
  return (
    <div>
      <img
        className="nav-icon story-icon"
        src={`images/pp/${image}`}
        alt={name}
      />
      <span className="nav-icon">{name}</span>
    </div>
  );
};

export default StoryIcon;
