import React, { useEffect, useState } from "react";

import StoryIcon from "./StoryIcon/StoryIcon";
import Spinner from "../UI/Spinner/Spinner";

import "./StoryIcons.css";

const StoryIcons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUsers/6`,
        {
          method: "GET",
        }
      );
      const responseData = await response.json();

      if (!responseData.error) {
        setIsLoading(false);
        setUsers(responseData.users);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && (
        <div id="story-icons">
          {users.map((user) => (
            <StoryIcon
              key={user._id}
              id={user._id}
              image={user.pic}
              name={user.nickname}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default StoryIcons;
