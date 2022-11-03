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
        id={post.user._id}
        ppimage={post.user.pic}
        name={post.user.name}
        nickname={post.user.nickname}
      />

      <PostImage id={post.user._id} postimage={post.postimage} alt={post.alt} />

      <PostInfo
        id={post.user._id}
        likes={post.likes}
        nickname={post.user.nickname}
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
