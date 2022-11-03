import React from "react";
import { Link } from "react-router-dom";

import "./StoryIcon.css";

const StoryIcon = ({ id, image, name }) => {
  return (
    <Link to={`/profile/${id}`} className="story-icon-container">
      <img className="story-icon" src={image} alt={name} />
      <span className="story-icon-user">{name}</span>
    </Link>
  );
};

export default StoryIcon;
