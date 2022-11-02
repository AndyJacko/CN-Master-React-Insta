import React from "react";

import "./WTFBox.css";

const WTFBox = ({ image, name }) => {
  return (
    <div className="w-t-f-box">
      <div className="w-t-f-user">
        <img
          className="nav-icon follow-icon"
          src={`images/pp/${image}`}
          alt={name}
        />

        <p>
          <strong className="nav-icon">{name}</strong>
          <img
            src="images/pp/verified.png"
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
