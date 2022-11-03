import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Info from "../components/User/Profile/Info/Info";
import PST from "../components/User/Profile/PST/PST";
import Gallery from "../components/User/Profile/Gallery/Gallery";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUser/${id}`
      );

      const data = await response.json();

      if (!data.message) {
        setUser(data.user[0]);
      } else {
        navigate("/notfound");
      }
    };

    getUser();
  }, [id, navigate]);

  return (
    <>
      {user._id && (
        <>
          <Info user={user} />
          <PST />
          <Gallery posts={user.posts} />
        </>
      )}
    </>
  );
};

export default Profile;
