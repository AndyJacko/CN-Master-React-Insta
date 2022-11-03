import React from "react";
import { Link } from "react-router-dom";

import "./WTFBox.css";

const WTFBox = ({ id, image, name }) => {
  return (
    <div className="w-t-f-box">
      <div className="w-t-f-user">
        <Link to={`/profile/${id}`}>
          <img className="nav-icon follow-icon" src={image} alt={name} />
        </Link>

        <p>
          <Link to={`/profile/${id}`}>
            <strong className="nav-icon">{name}</strong>
          </Link>
          <img
            src="https://delaygram.andyjacko.com/images/pp/verified.png"
            alt="Verified"
            className="verified"
          />
          <br />
          <span>Delaygram recommended</span>
        </p>
      </div>
      <p className="follow-link">Follow</p>
    </div>
  );
};

export default WTFBox;
