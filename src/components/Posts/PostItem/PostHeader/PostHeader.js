import React from "react";

import "./PostHeader.css";

const PostHeader = ({ ppimage, name, nickname }) => {
  return (
    <div className="post-header">
      <div>
        <div className="post-header-profile">
          <img className="post-icon" src={`images/pp/${ppimage}`} alt={name} />
          <span>
            <strong className="nav-icon">{nickname}</strong>
          </span>
        </div>
      </div>

      <div className="nav-icon ellipsis">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default PostHeader;
