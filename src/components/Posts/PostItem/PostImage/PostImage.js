import React from "react";
import { Link } from "react-router-dom";

import "./PostImage.css";

const PostImage = ({ id, postimage, alt }) => {
  return (
    <Link to={`/profile/${id}`} className="post-image">
      <img src={postimage} alt={alt} />
    </Link>
  );
};

export default PostImage;
