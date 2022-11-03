import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../../store/authContext";

import "./Info.css";

const Info = ({ user }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0), []);

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
              {user._id === authCtx.user && (
                <Link to="/editprofile">
                  <i className="fa-solid fa-gear"></i>
                </Link>
              )}
            </div>

            {user._id === authCtx.user && (
              <button onClick={onEditButton}>Edit Profile</button>
            )}
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
            <strong>{Number(user.numposts).toLocaleString()}</strong>
            <br />
            posts
          </span>

          <span>
            <strong>{Number(user.followers).toLocaleString()}</strong>
            <br />
            followers
          </span>

          <span>
            <strong>{Number(user.following).toLocaleString()}</strong>
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
            {user._id === authCtx.user && (
              <>
                <button onClick={onEditButton}>Edit Profile</button>
                <Link to="/editprofile">
                  <i className="fa-solid fa-gear"></i>
                </Link>
              </>
            )}
          </div>

          <div id="profile-stats-lg">
            <span>
              <strong>{Number(user.numposts).toLocaleString()}</strong>
              &nbsp;posts
            </span>

            <span>
              <strong>{Number(user.followers).toLocaleString()}</strong>
              &nbsp;followers
            </span>

            <span>
              <strong>{Number(user.following).toLocaleString()}</strong>
              &nbsp;following
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
