import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../../store/authContext";

import "./Small.css";

const Small = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUser/${authCtx.user}`
      );

      const data = await response.json();
      setUser(data.user[0]);
    };

    if (authCtx.user) {
      getUser();
    }
  }, [authCtx.user]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = () => {
    setShowMenu(false);
    authCtx.onLogout();
    navigate("/");
  };

  const toggleDarkness = () => {
    setShowMenu(false);
    authCtx.onThemeSwitch();
  };

  return (
    <>
      <header id="nav-top">
        <div id="header-container-top-sm">
          <div className="nav-icon">
            <i className="fa-solid fa-camera"></i>
          </div>

          <Link id="logo" className="nav-icon" to="/">
            <img
              id="logo-img-sm"
              src={`images/${
                authCtx.theme === "Light" ? "logo.png" : "logo2.png"
              }`}
              alt="Delaygram"
            />
          </Link>

          <div className="nav-icon">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </header>

      <header id="nav-bottom">
        <div id="header-container-bottom-sm">
          <Link className="nav-icon" to="/">
            <i className="fa-solid fa-house"></i>
          </Link>

          <div className="nav-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="nav-icon">
            <i className="fa-regular fa-square-plus"></i>
          </div>

          <div className="nav-icon">
            <i className="fa-regular fa-compass"></i>
          </div>

          <div className="nav-icon">
            <i className="fa-regular fa-heart"></i>
          </div>

          <div className="nav-icon">
            <img
              id="pp-sm"
              className="flex-v"
              src={`images/pp/${user.pic ? user.pic : "nopic.jpg"}`}
              alt={user.username}
              onClick={toggleMenu}
            />
          </div>
        </div>

        <div id="profile-menu-sm" className={`${!showMenu && "hide"}`}>
          {authCtx.isLoggedIn && (
            <>
              <p>
                <Link
                  id="p-link"
                  className="nav-icon"
                  to="/profile"
                  onClick={toggleMenu}>
                  <i className="fa-regular fa-circle-user"></i>Profile
                </Link>
              </p>

              <p>
                <Link
                  id="ep-link"
                  className="nav-icon"
                  to="/editprofile"
                  onClick={toggleMenu}>
                  <i className="fa-solid fa-gear"></i>Edit Profile
                </Link>
              </p>
            </>
          )}

          <p>
            <i className="fa-solid fa-repeat"></i>
            <span id="theme-lg" onClick={toggleDarkness}>
              {authCtx.theme === "Light" ? "Dark Theme" : "Light Theme"}
            </span>
          </p>

          {authCtx.isLoggedIn && (
            <div id="logout" onClick={logoutHandler}>
              Log out
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Small;
