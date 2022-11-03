import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../../store/authContext";

import "./Large.css";

const Large = () => {
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
    <header>
      <div id="header-container-lg">
        <Link id="logo" className="nav-icon" to="/">
          <img
            id="logo-img-lg"
            src={`https://delaygram.andyjacko.com/images/${
              authCtx.theme === "Light" ? "logo.png" : "logo2.png"
            }`}
            alt="Delaygram"
          />
        </Link>

        <div id="search">
          <input id="search-input" type="text" placeholder="Search" />
        </div>

        <nav id="nav">
          <Link className="nav-icon" to="/">
            <i className="fa-solid fa-house"></i>
          </Link>

          <div className="nav-icon">
            <i className="fa-regular fa-paper-plane"></i>
          </div>

          <Link className="nav-icon" to="/addpost">
            <i className="fa-regular fa-square-plus"></i>
          </Link>

          <div className="nav-icon">
            <i className="fa-regular fa-compass"></i>
          </div>

          <div className="nav-icon">
            <i className="fa-regular fa-heart"></i>
          </div>

          <div className="nav-icon">
            {authCtx.isLoggedIn && (
              <img
                id="pp-lg"
                className="flex-v"
                src={
                  user.pic
                    ? user.pic
                    : "https://delaygram.andyjacko.com/images/pp/nopic.jpg"
                }
                alt={user.username}
                onClick={toggleMenu}
              />
            )}

            {!authCtx.isLoggedIn && (
              <img
                id="pp-lg"
                className="flex-v"
                src="https://delaygram.andyjacko.com/images/pp/nopic.jpg"
                alt={user.username}
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>

        <div id="profile-menu-lg" className={`${!showMenu && "hide"}`}>
          {authCtx.isLoggedIn && (
            <>
              <p>
                <Link
                  id="p-link"
                  className="nav-icon"
                  to={`/profile/${authCtx.user}`}
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
      </div>
    </header>
  );
};

export default Large;
