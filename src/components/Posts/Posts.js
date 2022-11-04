import React, { useEffect, useState } from "react";

import StoryIcons from "../StoryIcons/StoryIcons";
import PostItem from "./PostItem/PostItem";
import Spinner from "../UI/Spinner/Spinner";

import "./Posts.css";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URI}/readPosts/`,
        {
          method: "GET",
        }
      );
      const responseData = await response.json();

      if (!responseData.error) {
        setIsLoading(false);
        setPosts(responseData.posts);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <section id="posts">
        <StoryIcons />

        {isLoading && <Spinner />}
        {!isLoading && (
          <div id="post-container">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Posts;
