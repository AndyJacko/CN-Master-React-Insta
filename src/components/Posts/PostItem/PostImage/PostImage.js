import React from "react";

import "./PostImage.css";

const PostImage = ({ postimage, alt }) => {
  return (
    <div className="post-image">
      <img src={`images/posts/${postimage}`} alt={alt} />
    </div>
  );
};

export default PostImage;
