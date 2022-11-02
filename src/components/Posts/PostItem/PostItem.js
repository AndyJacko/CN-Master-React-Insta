import React from "react";

import PostHeader from "./PostHeader/PostHeader";
import PostImage from "./PostImage/PostImage";
import PostInfo from "./PostInfo/PostInfo";
import PostAddComment from "./PostAddComment/PostAddComment";

import "./PostItem.css";

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <PostHeader
        ppimage={post.ppimage}
        name={post.name}
        nickname={post.nickname}
      />

      <PostImage postimage={post.postimage} alt={post.alt} />

      <PostInfo
        likes={post.likes}
        nickname={post.nickname}
        comment={post.comment}
        tags={post.tags}
        numcomments={post.numcomments}
        timeposted={post.timeposted}
      />

      <PostAddComment />
    </div>
  );
};

export default PostItem;
