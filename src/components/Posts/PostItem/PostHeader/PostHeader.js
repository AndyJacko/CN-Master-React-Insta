import React from "react";
import { Link } from "react-router-dom";

import "./PostHeader.css";

const PostHeader = ({ id, ppimage, name, nickname }) => {
  return (
    <div className="post-header">
      <div>
        <div className="post-header-profile">
          <Link to={`/profile/${id}`}>
            <img
              className="post-icon"
              src={ppimage ? ppimage : "images/pp/nopic.jpg"}
              alt={name}
            />
          </Link>

          <Link to={`/profile/${id}`}>
            <strong className="nav-icon">{nickname}</strong>
          </Link>
        </div>
      </div>

      <div className="nav-icon ellipsis">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default PostHeader;
