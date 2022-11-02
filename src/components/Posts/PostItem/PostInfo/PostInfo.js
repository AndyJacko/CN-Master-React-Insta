import React from "react";

import PostInfoIcons from "../PostInfoIcons/PostInfoIcons";

import "./PostInfo.css";

const PostInfo = ({
  likes,
  nickname,
  comment,
  tags,
  numcomments,
  timeposted,
}) => {
  return (
    <div className="post-info">
      <PostInfoIcons />

      <p className="likes-count">
        <strong className="nav-icon">{likes.toLocaleString()} likes</strong>
      </p>

      <p className="post-comment">
        <strong className="nav-icon">{nickname}</strong> {comment}
        <br />
        {tags.map((tag) => (
          <span key={tag} className="hashtag">
            {tag}
          </span>
        ))}
      </p>

      <p className="nav-icon view-all-comments">
        View all {numcomments} comments
      </p>

      <p className="nav-icon time-posted">{timeposted} HOURS AGO</p>
    </div>
  );
};

export default PostInfo;
