import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../store/authContext";

import "./Profile.css";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUser/${authCtx.user}`
      );

      const data = await response.json();
      setUser(data.user[0]);
    };

    getUser();
  }, [authCtx.user]);

  return (
    <Link id="suggestions-profile" to="/profile">
      <img
        className="nav-icon suggestions-pp"
        src={`images/pp/${user.pic ? user.pic : "nopic.jpg"}`}
        alt={user.username}
      />

      <div>
        <p>
          <strong className="nav-icon">
            {user.nickname ? user.nickname : user.username}
          </strong>
          <br />
          <span>{user.username}</span>
        </p>
      </div>
    </Link>
  );
};

export default Profile;
