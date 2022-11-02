import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../../store/authContext";

import "./Info.css";

const Info = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
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

  const onEditButton = () => {
    navigate("/editprofile");
  };

  return (
    <>
      <section id="profile-info-sm">
        <div id="profile-image-sm">
          <div>
            <img
              src={user.pic ? user.pic : "images/pp/nopic.jpg"}
              alt={user.username}
            />
          </div>

          <div id="profile-settings-sm">
            <div>
              {user.nickname ? user.nickname : user.username}&nbsp;
              <Link to="/editprofile">
                <i className="fa-solid fa-gear"></i>
              </Link>
            </div>

            <button onClick={onEditButton}>Edit Profile</button>
          </div>
        </div>

        <div id="profile-about-sm">
          <div>
            <strong>{user.username}</strong>
          </div>

          <div>{user.bio}</div>

          <div>
            {user.link && (
              <a href={user.link} target="_blank" rel="noreferrer">
                {user.link}
              </a>
            )}
          </div>
        </div>

        <div id="profile-stats-sm">
          <span>
            <strong>{user.posts}</strong>
            <br />
            posts
          </span>

          <span>
            <strong>{user.followers}</strong>
            <br />
            followers
          </span>

          <span>
            <strong>{user.following}</strong>
            <br />
            following
          </span>
        </div>
      </section>

      <section id="profile-info-lg">
        <div id="profile-img-lg">
          <img
            src={user.pic ? user.pic : "images/pp/nopic.jpg"}
            alt={user.username}
          />
        </div>

        <div id="profile-about-lg">
          <div id="profile-settings-lg">
            {user.nickname ? user.nickname : user.username}&nbsp;
            <button onClick={onEditButton}>Edit Profile</button>
            <Link to="/editprofile">
              <i className="fa-solid fa-gear"></i>
            </Link>
          </div>

          <div id="profile-stats-lg">
            <span>
              <strong>{user.posts}</strong> posts
            </span>

            <span>
              <strong>{user.followers}</strong> followers
            </span>

            <span>
              <strong>{user.following}</strong> following
            </span>
          </div>

          <div id="profile-andy-lg">
            <div>
              <strong>{user.username}</strong>
            </div>

            <div>{user.bio}</div>

            <div>
              {user.link && (
                <a href={user.link} target="_blank" rel="noreferrer">
                  {user.link}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
