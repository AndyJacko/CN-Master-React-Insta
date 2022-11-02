import React from "react";

import "./PostAddComment.css";

const PostAddComment = () => {
  return (
    <div className="post-comments">
      <div className="comment-container">
        <i className="nav-icon smiles fa-regular fa-face-smile fs-xl"></i>
        <input
          className="comment-input"
          type="text"
          placeholder="Add a comment..."
        />
      </div>

      <p className="post-link">Post</p>
    </div>
  );
};

export default PostAddComment;
