import React from "react";

import "./PostInfoIcons.css";

const PostInfoIcons = () => {
  return (
    <div className="post-info-icons">
      <div className="like-n-comment">
        <div className="post-icon">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="post-icon">
          <i className="fa-regular fa-comment flip"></i>
        </div>
        <div className="post-icon">
          <i className="fa-regular fa-paper-plane"></i>
        </div>
      </div>

      <div className="nav-icon">
        <i className="fa-regular fa-bookmark"></i>
      </div>
    </div>
  );
};

export default PostInfoIcons;
