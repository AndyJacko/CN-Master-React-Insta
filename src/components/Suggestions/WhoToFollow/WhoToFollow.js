import React, { useEffect, useState } from "react";

import WTFBox from "./WTFBox/WTFBox";
import Spinner from "../../UI/Spinner/Spinner";

import "./WhoToFollow.css";

const WhoToFollow = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUsers/5`,
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
      <div id="who-to-follow">
        <p id="s-f-y">Suggestions for you</p>
        <p id="see-all" className="nav-icon">
          See All
        </p>
      </div>

      {isLoading && <Spinner />}

      {!isLoading && (
        <div id="w-t-f-container">
          {users.map((user) => (
            <WTFBox
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

export default WhoToFollow;
